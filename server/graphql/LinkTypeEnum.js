const { GraphQLEnumType } = require("graphql");

// Define and export an enum with possible social media link types
module.exports = new GraphQLEnumType({
  name: "LinkTypeEnum",
  values: {
    DEVIANTART: { value: "deviantart" },
    INSTAGRAM: { value: "instagram" },
    FACEBOOK: { value: "facebook" },
    FLICKR: { value: "flickr" },
    GITHUB: { value: "github" },
    LINKEDIN: { value: "linkedin" },
    PINTEREST: { value: "pinterest" },
    REDDIT: { value: "reddit" },
    SNAPCHAT: { value: "snapchat" },
    SOUNDCLOUD: { value: "soundcloud" },
    TIKTOK: { value: "tiktok" },
    TUMBLR: { value: "tumblr" },
    TWITCH: { value: "twitch" },
    TWITTER: { value: "twitter" },
    WHATSAPP: { value: "whatsapp" },
    YOUTUBE: { value: "youtube" },
  },
});
