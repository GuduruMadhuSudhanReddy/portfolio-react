import React from "react";
import { Card, CardContent } from "./ui/Card";  

function ProjectCard({ title, description, link }) {
  return (
    <Card className="bg-white text-black p-4 rounded-lg shadow-lg border border-gray-300">  
      <CardContent>
        <h3 className="text-xl font-bold text-black">{title}</h3>  {/* ✅ Explicitly black */}
        <p className="text-gray-800">{description}</p>  {/* ✅ Dark gray for better contrast */}
        <a href={link} className="text-blue-700 font-semibold">View Project</a>  
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
