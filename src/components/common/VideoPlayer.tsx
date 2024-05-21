/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaProvider,
  MediaProviderAdapter,
  isVimeoProvider,
  isYouTubeProvider,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { Box } from "@mantine/core";

const VideoPlayer = (props: {
  videoTitle: string;
  videoSrc: string;
  width: string | number;
  maxHeight?: string | number;
  position?: string;
}) => {
  const { videoTitle, videoSrc, maxHeight, width, position } = props;

  const onProviderChange = (provider: MediaProviderAdapter | null) => {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    } else if (isVimeoProvider(provider)) {
      provider.cookies = true;
    }
  };

  return (
    <Box
      mah={maxHeight}
      h="auto"
      w={width}
      // m={"auto"}
      // @ts-ignore
      style={{
        position: position,
      }}
    >
      <MediaPlayer
        title={videoTitle}
        src={videoSrc}
        autoPlay={false}
        onProviderChange={onProviderChange}
      >
        <MediaProvider />
        <DefaultVideoLayout
          playbackRates={[0.5, 0.75, 1.0, 1.1, 1.2, 1.5, 1.75, 2.0, 2.5, 3.0]}
          hideQualityBitrate
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </Box>
  );
};

export default VideoPlayer;
