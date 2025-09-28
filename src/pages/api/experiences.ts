import type { APIRoute } from "astro";

// Mock data for experiences
const mockExperiences = {
	es: [
		{
			experience_id: 1,
			work: "BAM (Banco Agromercantil)",
			title: "Analista Desarrollador III (Desarrollador Full Stack/Senior)",
			description: "Desarrollo y mantenimiento de aplicaciones bajo varias herramientas y lenguajes de programación, TypeScript, Angular, NoSQL, SQL, C#, AWS, AzureDevOps.",
			img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
			alt: "BAM",
			time: "jul 2023 - Presente",
			location: "Guatemala, Guatemala"
		},
		{
			experience_id: 2,
			work: "Banco Industrial (Hospitales la Paz)",
			title: "Analista Programador (full stack)",
			description: "Desarrollo y mantenimiento de aplicaciones web con VUEjs, delphi, javascript, SQL, C#.",
			img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center",
			alt: "Banco Industrial",
			time: "2017 - 2021",
			location: "Guatemala, Guatemala"
		},
		{
			experience_id: 3,
			work: "BANRURAL",
			title: "Programador y Analista de Sistemas",
			description: "Mantenimiento de aplicaciones, optimización, automatizacion y monitoreo de procesos de cierre. VB.NET, C#, T-SQL, Sybase, Control-M, Reportes con Reporting and Services y scripts (SQR).",
			img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
			alt: "BANRURAL",
			time: "2014 - 2017",
			location: "Guatemala, Guatemala"
		}
	],
	en: [
		{
			experience_id: 1,
			work: "Full Stack Developer",
			title: "Senior Developer",
			description: "Web application development with React, Node.js and SQL/NoSQL databases",
			img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
			alt: "Company 1",
			time: "2022 - Present",
			location: "Madrid, Spain"
		},
		{
			experience_id: 2,
			work: "Frontend Developer",
			title: "Junior Developer",
			description: "Creating modern user interfaces with React and TypeScript",
			img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center",
			alt: "Company 2",
			time: "2021 - 2022",
			location: "Barcelona, Spain"
		},
		{
			experience_id: 3,
			work: "Intern",
			title: "Developer Intern",
			description: "Learning and developing skills in web technologies",
			img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
			alt: "Company 3",
			time: "2020 - 2021",
			location: "Valencia, Spain"
		}
	],
	fr: [
		{
			experience_id: 1,
			work: "Développeur Full Stack",
			title: "Développeur Senior",
			description: "Développement d'applications web avec React, Node.js et bases de données SQL/NoSQL",
			img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
			alt: "Entreprise 1",
			time: "2022 - Présent",
			location: "Madrid, Espagne"
		},
		{
			experience_id: 2,
			work: "Développeur Frontend",
			title: "Développeur Junior",
			description: "Création d'interfaces utilisateur modernes avec React et TypeScript",
			img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center",
			alt: "Entreprise 2",
			time: "2021 - 2022",
			location: "Barcelone, Espagne"
		},
		{
			experience_id: 3,
			work: "Stagiaire",
			title: "Développeur Stagiaire",
			description: "Apprentissage et développement de compétences en technologies web",
			img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
			alt: "Entreprise 3",
			time: "2020 - 2021",
			location: "Valence, Espagne"
		}
	]
};

export const GET: APIRoute = async ({ request }) => {
	try {
		const url = new URL(request.url);
		const currentLocale = url.searchParams.get("currentLocale") || "es";

		const experiences = mockExperiences[currentLocale as keyof typeof mockExperiences] || mockExperiences.es;

		return new Response(JSON.stringify({ data: experiences }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: "No se pudo obtener las experiencias",
			}),
			{ status: 503 },
		);
	}
};
