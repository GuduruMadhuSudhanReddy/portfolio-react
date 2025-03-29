import React from "react";
import { Card, CardContent } from "./ui/Card";

function ProjectCard({ title, description, link }) {
  return (
    <Card className="bg-sky-500 text-white p-4 rounded-lg shadow-lg border border-blue-300">  
      <CardContent>
        <h3 className="text-xl font-bold text-white">{title}</h3>  {/* ✅ White text for contrast */}
        <p className="text-">{description}</p>  {/* ✅ Light gray for readability */}
        <a href={link} className="text-yellow font-semibold hover:text-yellow-400">
          View Project
        </a>  
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
