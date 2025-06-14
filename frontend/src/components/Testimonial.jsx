import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Container,
  Fade,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const testimonials = [
  {
    name: "Aarav Singh",
    designation: "Tech Lead, Infosys",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Treat Holidays made my trip seamless and unforgettable. Highly recommended!",
  },
  {
    name: "Meera Patel",
    designation: "Designer, Canva",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The itinerary was perfect and the service was amazing. I saved so much time!",
  },
  {
    name: "Rohan Sharma",
    designation: "Sales Head, MakeMyTrip",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    quote:
      "Compared and chose the best deal. Very satisfied with the platform.",
  },
  {
    name: "Kriti Verma",
    designation: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "A seamless experience with so many options to explore. Loved the service!",
  },
  {
    name: "Dev Aryan",
    designation: "Marketing, Yatra",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    quote:
      "The agents were very helpful. I got everything sorted in just a few clicks.",
  },
];

function getVisibleTestimonials(startIndex, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(testimonials[(startIndex + i) % testimonials.length]);
  }
  return result;
}

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleCount = isMobile ? 1 : 3;

  const visibleTestimonials = getVisibleTestimonials(startIndex, visibleCount);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setFade(true);
    }, 300);
  };

  return (
    <Box sx={{ py: 10, background: "#fff" }}>
      <Container>
        <Typography
          variant="h3"
          align="left"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Testimonials
        </Typography>
        <Fade in={fade} timeout={300}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, sm: 4 },
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            {visibleTestimonials.map((t, idx) => (
              <Card
                key={idx}
                elevation={0}
                sx={{
                  width: { xs: "100%", sm: 400, md: 480 },
                  maxWidth: "100%",
                  p: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 6,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mx: isMobile ? "auto" : 0,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "left", mt: 2 }}>
                  <Avatar src={t.image} sx={{ width: 80, height: 80 }} />
                </Box>
                <CardContent sx={{ width: "100%" }}>
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, textAlign: "left", color: "#555" }}
                  >
                    {t.quote}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    align="left"
                    sx={{ mt: 2 }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    align="left"
                    color="text.secondary"
                  >
                    {t.designation}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Fade>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              mx: 2,
              backgroundColor: "#ccc",
              color: "white",
              "&:hover": { backgroundColor: "#bdbdbd" },
              width: 56,
              height: 56,
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              mx: 2,
              backgroundColor: "#FFD600",
              color: "white",
              "&:hover": { backgroundColor: "#FFC400" },
              width: 56,
              height: 56,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
