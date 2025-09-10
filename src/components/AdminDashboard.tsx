import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { 
  Mail, 
  User, 
  Building, 
  Calendar,
  DollarSign,
  MessageSquare,
  LogOut,
  Trash2,
  Eye
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  timestamp: string;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    // Load submissions from localStorage
    loadSubmissions();
  }, [navigate]);

  const loadSubmissions = () => {
    const storedSubmissions = localStorage.getItem('contactSubmissions');
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const handleDelete = (id: string) => {
    const updatedSubmissions = submissions.filter(sub => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
    toast.success('Submission deleted successfully');
  };

  const handleViewDetails = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setIsDetailOpen(true);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getBudgetLabel = (budget: string) => {
    const budgetMap: { [key: string]: string } = {
      'under-5k': 'Under $5,000',
      '5k-15k': '$5,000 - $15,000',
      '15k-50k': '$15,000 - $50,000',
      '50k-plus': '$50,000+'
    };
    return budgetMap[budget] || budget;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage contact submissions</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{submissions.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {submissions.filter(sub => {
                  const subDate = new Date(sub.timestamp);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return subDate > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {submissions.filter(sub => {
                  const subDate = new Date(sub.timestamp).toDateString();
                  const today = new Date().toDateString();
                  return subDate === today;
                }).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                High Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {submissions.filter(sub => 
                  sub.budget === '15k-50k' || sub.budget === '50k-plus'
                ).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Submissions</CardTitle>
            <CardDescription>
              All contact form submissions from potential clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No submissions yet. Contact form submissions will appear here.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="text-sm">
                        {formatDate(submission.timestamp)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {submission.name}
                      </TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{submission.service}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {getBudgetLabel(submission.budget)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleViewDetails(submission)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(submission.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Detail Dialog */}
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Submission Details</DialogTitle>
              <DialogDescription>
                Complete information for this contact submission
              </DialogDescription>
            </DialogHeader>
            {selectedSubmission && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Name</Label>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{selectedSubmission.name}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Email</Label>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{selectedSubmission.email}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Company</Label>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">
                        {selectedSubmission.company || 'Not provided'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Service</Label>
                    <Badge>{selectedSubmission.service}</Badge>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Budget</Label>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="outline">
                        {getBudgetLabel(selectedSubmission.budget)}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Submitted</Label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">
                        {formatDate(selectedSubmission.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Message</Label>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mb-2" />
                    <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}