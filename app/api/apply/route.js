// app/api/apply/route.js
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { NextResponse } from 'next/server';
import { createObjectCsvWriter } from 'csv-writer';

export async function POST(request) {
  try {
    const data = await request.json();
    const csvPath = './applications.csv';
    
    // CSV header configuration
    const csvWriter = createObjectCsvWriter({
      path: csvPath,
      header: [
        {id: 'timestamp', title: 'Timestamp'},
        {id: 'firstName', title: 'First Name'},
        {id: 'lastName', title: 'Last Name'},
        {id: 'birthDate', title: 'Date of Birth'},
        {id: 'currentSchool', title: 'Current School'},
        {id: 'gradeApplyingFor', title: 'Grade Applying For'},
        {id: 'parentEmail', title: 'Parent Email'},
        {id: 'parentPhone', title: 'Parent Phone'}
      ],
      append: true
    });

    // Add timestamp
    const record = {
      timestamp: new Date().toISOString(),
      ...data
    };

    // Write to CSV
    await csvWriter.writeRecords([record]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('CSV write error:', error);
    return NextResponse.json(
      { error: 'Failed to save application' },
      { status: 500 }
    );
  }
}