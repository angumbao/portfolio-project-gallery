import { Project } from "../types/Project";

export const cleanJson = (data: Project[]) => {
  return data.map((project) => {
    const { video, ...rest } = project;

    if (!video) return null;

    return {
      ...rest,
      video: makeVideoLinksUsable(video),
    };
  });
};

const makeVideoLinksUsable = (link: string) => {
  const isGdriveVideo = link.includes("drive.google.com");
  const isLoomVideo = link.includes("loom.com");
  const isYoutubeVideo = link.includes("youtube.com");

  if (isYoutubeVideo) {
    // this is a youtube link https://www.youtube.com/watch?v=Z6GxJ3lRbGk
    // the link could also be https://youtu.be/nrVlVmbv1ns or https://youtu.be/LVpzWi5kuhA?si=wU8P_MJQmHH57l3V
    // the final link should be of the form "https://www.youtube.com/embed/{videoID}"
    // write logic to get me the final link based on the form of the source link
    const urlParams = new URLSearchParams(new URL(link).search);
    const videoID = urlParams.get("v");
    if (link.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${link.split("/").pop()}`;
    }

    if (link.includes("watch")) {
      return `https://www.youtube.com/embed/${videoID}`;
    }

    return link;
  }

  if (isGdriveVideo) {
    // this is a gdrive link https://drive.google.com/file/d/1dNgaaBPRFau1hSzivfORJjZx-tj7JZ4O/view?usp=sharing
    // the file id is between /d/ and /view
    // the final link should be of the form "https://drive.google.com/uc?id={fileID}"
    const fileID = link.split("/d/")[1].split("/view")[0];
    return `https://drive.google.com/uc?id=${fileID}`;
  }

  if (isLoomVideo) {
    return link.replace("share", "embed");
  }

  return link;
};
