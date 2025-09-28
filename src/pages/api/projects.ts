import type { APIRoute } from "astro";

// Mock data for projects
const mockProjects = {
	es: [
		{
			project_id: 1,
			slug: "ecommerce-react",
			title: "E-commerce React",
			description: "Tienda online completa desarrollada con React, Node.js y MongoDB",
			card_image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
			images_topics: ["react", "nodejs", "mongodb", "express"],
			link_repo: "https://github.com/itael/ecommerce-react",
			link_web: "https://ecommerce-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 2,
			slug: "dashboard-analytics",
			title: "Dashboard Analytics",
			description: "Panel de control para análisis de datos con gráficos interactivos",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["vuejs", "d3js", "firebase"],
			link_repo: "https://github.com/itael/dashboard-analytics",
			link_web: "https://dashboard-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 3,
			slug: "api-rest-blog",
			title: "API REST Blog",
			description: "API completa para un sistema de blog con autenticación JWT",
			card_image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop",
			images_topics: ["nodejs", "express", "postgresql", "jwt"],
			link_repo: "https://github.com/itael/api-blog",
			link_web: null,
			fork: false,
			category: "backend"
		},
		{
			project_id: 4,
			slug: "sistema-empresarial",
			title: "Sistema Empresarial CRM",
			description: "Sistema completo de gestión empresarial con módulos de ventas, inventario y clientes",
			card_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
			images_topics: ["react", "typescript", "prisma", "nextjs"],
			link_repo: "https://github.com/itael/crm-empresarial",
			link_web: "https://crm-demo.vercel.app",
			fork: false,
			category: "companies"
		},
		{
			project_id: 5,
			slug: "analytics-dashboard",
			title: "Dashboard de Análisis de Datos",
			description: "Herramienta de visualización y análisis de datos con machine learning integrado",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["python", "pandas", "matplotlib", "jupyter"],
			link_repo: "https://github.com/itael/data-analytics",
			link_web: "https://analytics-demo.streamlit.app",
			fork: false,
			category: "dataAnalyst"
		}
	],
	en: [
		{
			project_id: 1,
			slug: "react-ecommerce",
			title: "React E-commerce",
			description: "Complete online store developed with React, Node.js and MongoDB",
			card_image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
			images_topics: ["react", "nodejs", "mongodb", "express"],
			link_repo: "https://github.com/itael/ecommerce-react",
			link_web: "https://ecommerce-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 2,
			slug: "analytics-dashboard",
			title: "Analytics Dashboard",
			description: "Data analysis dashboard with interactive charts",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["vuejs", "d3js", "firebase"],
			link_repo: "https://github.com/itael/dashboard-analytics",
			link_web: "https://dashboard-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 3,
			slug: "blog-rest-api",
			title: "Blog REST API",
			description: "Complete API for a blog system with JWT authentication",
			card_image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop",
			images_topics: ["nodejs", "express", "postgresql", "jwt"],
			link_repo: "https://github.com/itael/api-blog",
			link_web: null,
			fork: false,
			category: "backend"
		},
		{
			project_id: 4,
			slug: "enterprise-crm",
			title: "Enterprise CRM System",
			description: "Complete business management system with sales, inventory and customer modules",
			card_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
			images_topics: ["react", "typescript", "prisma", "nextjs"],
			link_repo: "https://github.com/itael/crm-empresarial",
			link_web: "https://crm-demo.vercel.app",
			fork: false,
			category: "companies"
		},
		{
			project_id: 5,
			slug: "data-analytics-dashboard",
			title: "Data Analytics Dashboard",
			description: "Data visualization and analysis tool with integrated machine learning",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["python", "pandas", "matplotlib", "jupyter"],
			link_repo: "https://github.com/itael/data-analytics",
			link_web: "https://analytics-demo.streamlit.app",
			fork: false,
			category: "dataAnalyst"
		}
	],
	fr: [
		{
			project_id: 1,
			slug: "ecommerce-react",
			title: "E-commerce React",
			description: "Boutique en ligne complète développée avec React, Node.js et MongoDB",
			card_image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
			images_topics: ["react", "nodejs", "mongodb", "express"],
			link_repo: "https://github.com/itael/ecommerce-react",
			link_web: "https://ecommerce-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 2,
			slug: "dashboard-analytics",
			title: "Tableau de Bord Analytics",
			description: "Tableau de bord pour l'analyse de données avec des graphiques interactifs",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["vuejs", "d3js", "firebase"],
			link_repo: "https://github.com/itael/dashboard-analytics",
			link_web: "https://dashboard-demo.vercel.app",
			fork: false,
			category: "frontend"
		},
		{
			project_id: 3,
			slug: "api-rest-blog",
			title: "API REST Blog",
			description: "API complète pour un système de blog avec authentification JWT",
			card_image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop",
			images_topics: ["nodejs", "express", "postgresql", "jwt"],
			link_repo: "https://github.com/itael/api-blog",
			link_web: null,
			fork: false,
			category: "backend"
		},
		{
			project_id: 4,
			slug: "systeme-crm-entreprise",
			title: "Système CRM d'Entreprise",
			description: "Système complet de gestion d'entreprise avec modules de ventes, inventaire et clients",
			card_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
			images_topics: ["react", "typescript", "prisma", "nextjs"],
			link_repo: "https://github.com/itael/crm-empresarial",
			link_web: "https://crm-demo.vercel.app",
			fork: false,
			category: "companies"
		},
		{
			project_id: 5,
			slug: "tableau-analyse-donnees",
			title: "Tableau d'Analyse de Données",
			description: "Outil de visualisation et d'analyse de données avec machine learning intégré",
			card_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			images_topics: ["python", "pandas", "matplotlib", "jupyter"],
			link_repo: "https://github.com/itael/data-analytics",
			link_web: "https://analytics-demo.streamlit.app",
			fork: false,
			category: "dataAnalyst"
		}
	]
};

export const GET: APIRoute = async ({ request }) => {
	try {
		const url = new URL(request.url);
		const currentLocale = url.searchParams.get("currentLocale") || "es";

		const projects = mockProjects[currentLocale as keyof typeof mockProjects] || mockProjects.es;

		return new Response(JSON.stringify({ data: { rows: projects } }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: "No se pudo obtener los proyectos",
			}),
			{ status: 503 },
		);
	}
};
