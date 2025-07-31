export const API_URL = "http://localhost:3000"; // backend NestJS

export async function fetchCourses() {
  const res = await fetch(`${API_URL}/courses`);
  return res.json();
}

export async function fetchCoursesByLevel(level: string) {
  const res = await fetch(`${API_URL}/courses?level=${level}`);
  return res.json();
}

export async function fetchCourse(id: number) {
  const res = await fetch(`${API_URL}/courses/${id}`);
  return res.json();
}

export async function fetchSequencesByCourse(courseId: number) {
  const res = await fetch(`${API_URL}/sequences?courseId=${courseId}`);
  return res.json();
}

export async function fetchSequence(id: number) {
  const res = await fetch(`${API_URL}/sequences/${id}`);
  return res.json();
}

export async function fetchResourcesBySequence(sequenceId: number) {
  const res = await fetch(`${API_URL}/resources?sequenceId=${sequenceId}`);
  return res.json();
}

export async function fetchSequencesByLevel(level: string) {
  const res = await fetch(`${API_URL}/sequences?level=${level}`);
  return res.json();
}