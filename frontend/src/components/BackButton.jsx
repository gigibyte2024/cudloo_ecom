import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 z-50 text-sm text-primary underline hover:opacity-80 transition"
    >
      ← Back
    </button>
  );
}