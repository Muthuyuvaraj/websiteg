// app/page.tsx or pages/index.tsx
'use client'; // only if you're in the /app directory (Next.js 13+)

import Card from "@/components/Card";

const Home = () => {
  const data = [
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer tincidunt, nisi vel tempor convallis, augue sapien",
    },
  ];

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </main>
  );
};

export default Home;
