//Display the list of uploaded PDS files
export default function DocumentList({documents, activeDoc, onSelect}) {
  return (
    <div className="sidebar">
      <h3>Documents</h3>

      {documents.length === 0 && (
        <p><em>No documents uploaded</em></p>
      )}

      <ul>
        {documents.map((doc) => (
          <li
            key={doc}
            className={doc === activeDoc ? "active" : ""}
            onClick={() => onSelect(doc)}
          >
            {doc}
          </li>
        ))}
      </ul>
    </div>
  );
}
