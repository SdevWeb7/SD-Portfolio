import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "prisma",
    "postgresql",
    "vercel",
    "express",
    "nodedotjs",
    "docker",
    "git",
    "postgresql",
    "github",
    "prisma",
    "visualstudiocode",
    "nextdotjs",
    "html5",
    "css3",
];

export default function IconCloudDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}