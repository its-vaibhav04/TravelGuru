import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center", py: 8 }}>
        <SentimentDissatisfiedIcon
          sx={{ fontSize: 80, color: "#FFD600", mb: 2 }}
        />
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 72, sm: 120 },
            color: "#222",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, color: "#444" }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
          It might have been moved or deleted. Please check the URL or return to
          the homepage.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "#FFD600",
            color: "#222",
            fontWeight: 700,
            borderRadius: 3,
            px: 4,
            py: 1.5,
            boxShadow: 2,
            "&:hover": { background: "#FFC400" },
          }}
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </Button>
      </Container>
    </Box>
  );
}
