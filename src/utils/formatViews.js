export const formatViews = (viewCountText) => {
    // Remove " views" and commas from the string, then convert it to a number
    const viewCount = parseInt(viewCountText.replace(/ views|,/g, ''), 10);
  
    // Check if the number is in millions, thousands, or lower
    if (viewCount >= 1e6) {
      // Millions
      return (viewCount / 1e6).toFixed(1) + ' million';
    } else if (viewCount >= 1e3) {
      // Thousands
      return (viewCount / 1e3).toFixed(1) + 'k';
    } else {
      // Less than 1000
      return viewCount.toString();
    }
  }
  