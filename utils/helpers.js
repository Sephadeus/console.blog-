const Handlebars = require('handlebars');

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">💡</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">⚙️</span>`;
      }
    },
    truncate_post: (p) => {
      const maxLength = 250;
      if (p.length > maxLength && p.length > 0) {
        let cutStr = p + " ";
        cutStr = p.substr(0, maxLength);
        cutStr =  p.substr(0, cutStr.lastIndexOf(" "));
        cutStr = 	cutStr.length > 0 ? cutStr : p.substr(0, maxLength);

        return new Handlebars.SafeString(new_str + '...');
      }
      return str;
      }
    };
  