import Images from "./designImages";



const { First, Second, Third, Fourth, Fifth, Sixth } = Images;
export const cardData = [
    {
      name: "Responsive slider",
      description: "Display images and text elegantly on every device.",
      tags: [
        {
          tagName: "Web Design",
          tagType : 'primary'
        }
      ],
      imageUrl : First
    },
    {
      name: "Forms",
      description: "Device with touch-friendly slider.",
      tags: [
        {
          tagName: "Documentation",
          tagType : 'secondary'
        }
      ],
      imageUrl : Second

    },
    {
      name: "Web fonts",
      description: "Site navigation automatically collapses into a mobile-friendly.",
      tags: [
        {
          tagName: "Templates",
          tagType: 'danger'
        }
      ],
      imageUrl : Third
    },
    {
      name: "Responsive design",
      description: "Displays perfectly on desktops, tablets, and phones.",
      tags: [
        {
          tagName: "Graphic Design",
          tagType: 'alpha'
        }
      ],
      imageUrl : Fourth
    },
    {
      name: "Interactions",
      description: "Promote your latest collections.",
      tags: [
        {
          tagName: "SEO",
          tagType: 'tango'
        },
        {
          tagName: "Marketing",
          tagType: 'tango2'
        }
      ],
      imageUrl : Fifth
    },
    {
      name: "Retina ready",
      description: "All graphics are optimized for devices with high DPI screens.",
      tags: [
        {
          tagName: "Branding",
          tagType: "tag"
        }
      ],
      imageUrl : Sixth

    }
  ];