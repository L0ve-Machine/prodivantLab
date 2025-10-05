import { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: "自社開発" | "受託開発";
  category: string;
  year: string;
  technologies: string[];
  status?: "運用中" | "開発中" | "完了";
}

const products: Product[] = [
  {
    id: "1",
    title: "クラウド統合管理プラットフォーム",
    description: "企業のマルチクラウド環境を一元管理し、コスト最適化とセキュリティ強化を実現するSaaSプラットフォーム。リアルタイムモニタリングと自動化機能を搭載。",
    imageUrl: "https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTU5MzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "自社開発",
    category: "クラウド",
    year: "2024",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL", "Docker"],
    status: "運用中"
  },
  {
    id: "2",
    title: "AIデータ分析ダッシュボード",
    description: "機械学習を活用したビジネスインテリジェンスツール。複雑なデータセットから洞察を抽出し、予測分析とカスタムレポート生成機能を提供。",
    imageUrl: "https://images.unsplash.com/photo-1730724655710-5b9bd9c68349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1OTU5MzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "自社開発",
    category: "AI・分析",
    year: "2024",
    technologies: ["Python", "React", "TensorFlow", "D3.js", "MongoDB"],
    status: "開発中"
  },
  {
    id: "3",
    title: "モバイルファースト業務アプリ",
    description: "現場作業員向けのモバイル業務管理アプリケーション。オフライン対応、リアルタイム同期、QRコードスキャン機能を搭載したネイティブアプリ。",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk1MDM1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "自社開発",
    category: "モバイル",
    year: "2023",
    technologies: ["React Native", "Firebase", "SQLite", "Node.js"],
    status: "運用中"
  },
  {
    id: "4",
    title: "金融機関向けダッシュボードシステム",
    description: "大手金融機関のリスク管理部門向けにカスタム開発したリアルタイムダッシュボード。規制要件に完全準拠し、高セキュリティを実現。",
    imageUrl: "https://images.unsplash.com/photo-1711637397406-0c5fe8165dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzU5NTkzMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "受託開発",
    category: "金融",
    year: "2024",
    technologies: ["Vue.js", "Java", "Oracle", "Spring Boot", "Docker"],
    status: "完了"
  },
  {
    id: "5",
    title: "AI搭載カスタマーサポートシステム",
    description: "自然言語処理を活用したインテリジェントなカスタマーサポート用チャットボット。24/7対応でユーザー満足度を大幅に向上。",
    imageUrl: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTkzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "受託開発",
    category: "AI・CX",
    year: "2023",
    technologies: ["Python", "OpenAI", "React", "FastAPI", "Redis"],
    status: "運用中"
  },
  {
    id: "6",
    title: "ECサイト統合管理プラットフォーム",
    description: "複数のECモールとの連携、在庫管理、注文処理を一元化するB2B向けプラットフォーム。API連携により既存システムとのシームレスな統合を実現。",
    imageUrl: "https://images.unsplash.com/photo-1718157582099-5227b1f7112d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTk1OTMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "受託開発",
    category: "EC・小売",
    year: "2023",
    technologies: ["Next.js", "Express", "MySQL", "Stripe", "Shopify API"],
    status: "運用中"
  }
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => 
        activeFilter === "inhouse" ? product.type === "自社開発" : product.type === "受託開発"
      );

  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="max-w-none px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 text-sm uppercase tracking-wider mb-6">
            Our Work
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <h2 className="text-4xl lg:text-6xl mb-8 lg:mb-0">
              プロダクト・<span className="text-cyan-400">実績</span>
            </h2>
            
            {/* Filter buttons */}
            <div className="flex items-center space-x-px bg-gray-800">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 uppercase tracking-wide text-sm transition-colors duration-300 ${
                  activeFilter === "all" 
                    ? "bg-cyan-400 text-black" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("inhouse")}
                className={`px-6 py-3 uppercase tracking-wide text-sm transition-colors duration-300 ${
                  activeFilter === "inhouse" 
                    ? "bg-cyan-400 text-black" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                自社開発
              </button>
              <button
                onClick={() => setActiveFilter("contract")}
                className={`px-6 py-3 uppercase tracking-wide text-sm transition-colors duration-300 ${
                  activeFilter === "contract" 
                    ? "bg-cyan-400 text-black" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                受託開発
              </button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-800">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              type={product.type}
              category={product.category}
              year={product.year}
              technologies={product.technologies}
              status={product.status}
              isLarge={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}