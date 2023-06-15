'use client';
export default function Students({ params }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>NAME : {params.student.toUpperCase()}</h3>
    </div>
  );
}
