import Link from 'next/link';

export default function Students() {
  const students = [
    { id: 'pratham', name: 'Pratham' },
    { id: 'shivang', name: 'Shivang' },
    { id: 'tanmay', name: 'Tanmay' },
    { id: 'sai', name: 'Sai' },
  ];
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
