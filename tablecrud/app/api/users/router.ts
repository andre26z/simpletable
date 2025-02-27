// app/api/users/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
	try {
		// Read from db.json
		const filePath = path.join(process.cwd(), 'db.json');
		const fileData = fs.readFileSync(filePath, 'utf8');
		const data = JSON.parse(fileData);

		// Return the users array from the JSON file
		return NextResponse.json(data.users || []);
	} catch (error) {
		console.error('Error reading users data:', error);
		return NextResponse.json({ error: 'Failed to load users' }, { status: 500 });
	}
}
