export async function getStoryStructure() {
  const volumes = [
    {
      number: 1,
      title: "The Heart That Binds",
      chapters: [
        { title: "Echoes of Loss" },
        { title: "New Horizons" },
        { title: "Solitary Wings" },
        { title: "Rest Day" },
        { title: "Midnight Confessions" },
        { title: "The First Drift" },
        { title: "Starlit Promise" },
      ],
    },
    {
      number: 2,
      title: "Unnamed",
      chapters: [
        { title: "The First Alarm" },
        { title: "Unwritten Orders" },
        { title: "Defiance and Doubt" },
        { title: "A Step Too Far" },
      ],
    },
  ];
  return volumes;
}

export async function getChapterContent(volume, chapter) {
  try {
    const response = await fetch(`/story/Volume${volume}/Chapter${chapter}.md`);
    if (!response.ok) {
      throw new Error("Chapter not found");
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Failed to fetch chapter:", error);
    return null;
  }
}
