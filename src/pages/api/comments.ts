import type { APIRoute } from "astro";

// Mock data for comments
let mockComments = [
	{
		id: 1,
		name: "María García",
		job: "Diseñadora UX/UI",
		description: "Excelente trabajo en el desarrollo del proyecto. Muy profesional y atento a los detalles.",
		country: "España",
		country_flag: "ES",
		date: "2024-01-15"
	},
	{
		id: 2,
		name: "John Smith",
		job: "Product Manager",
		description: "Great collaboration skills and excellent code quality. Highly recommended!",
		country: "Estados Unidos",
		country_flag: "US",
		date: "2024-01-10"
	},
	{
		id: 3,
		name: "Pierre Dubois",
		job: "Développeur Senior",
		description: "Travail remarquable sur l'optimisation des performances. Très satisfait du résultat.",
		country: "Francia",
		country_flag: "FR",
		date: "2024-01-05"
	}
];

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		
		// Add new comment to mock data
		const newComment = {
			id: mockComments.length + 1,
			name: body.name,
			job: body.job,
			description: body.description,
			country: body.country,
			country_flag: body.country_flag,
			date: new Date().toISOString().split('T')[0]
		};
		
		mockComments.push(newComment);

		return new Response(
			JSON.stringify({
				message: {
					name: body.name,
					job: body.job,
					description: body.description,
				},
			}),
			{
				status: 200,
			},
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ message: "No se pudo enviar el comentario." }),
			{ status: 503 },
		);
	}
};

export const GET: APIRoute = async () => {
	try {
		return new Response(JSON.stringify({ data: mockComments }), { status: 200 });
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: "No se pudo obtener los comentarios",
			}),
			{ status: 503 },
		);
	}
};
