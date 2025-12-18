const API = "http://127.0.0.1:8000";

export async function fetchDocuments() {
  const res = await fetch(`${API}/documents`);
  const data = await res.json();
  return data.documents || [];
}

export async function uploadDocuments(files) {
  const formData = new FormData();
  for (const file of files) {
    formData.append("files", file);
  }

  await fetch(`${API}/upload`, {
    method: "POST",
    body: formData,
  });
}

export async function fetchDocument(name) {
  const res = await fetch(
    `${API}/document/${encodeURIComponent(name)}`
  );
  return await res.json();
}
