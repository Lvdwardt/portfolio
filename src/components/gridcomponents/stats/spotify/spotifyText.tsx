"use client";
import { AutoTextSize } from "auto-text-size";

const SpotifyText = ({ children }: { children: string }) => {
  return (
    <AutoTextSize
      mode="oneline"
      className="text-2xl font-bold"
      maxFontSizePx={24}
    >
      {children}
    </AutoTextSize>
  );
};

export default SpotifyText;
