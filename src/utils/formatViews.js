export const formatViews = (viewCountText) => {
    const viewCount = parseInt(viewCountText.replace(/ views|,/g, ''), 10);
    if (viewCount >= 1e6) 
      return (viewCount / 1e6).toFixed(1) + ' million';
    else if (viewCount >= 1e3)
        return (viewCount / 1e3).toFixed(1) + 'k';
    else 
      return viewCount.toString();
  }
  