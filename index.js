/**
 * Talky
 * https://github.com/tcsiwula/talky
 *
 * Copyright (c) 2016 Tim Siwula
 * Licensed under the MIT license.
 *
 *
 * tutorials:
 * 1. fb -- https://www.smashingmagazine.com/2016/10/how-to-develop-a-chat-bot-with-node-js/
 * 2. fb -- https://developers.facebook.com/docs/messenger-platform/guides/quick-start
 * 3. https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
 * 4. https://github.com/brentertz/scapegoat
 * 5. fb -- https://chatbotsmagazine.com/a-nodejs-chatbot-tutorial-part-1-a2abd1b1c715#.gbwabfjef
 * 6. https://www.youtube.com/watch?v=C9xGEJ80jjs
 *
 *
 */

var chars = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': '\'',
  '&lt;': '<',
  '&gt;': '>'
};

/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  escape: function(html) {
    if (!html) {
      return '';
    }

    var values = Object.keys(chars).map(function(key) { return chars[key]; });
    var re = new RegExp('(' + values.join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      for (var key in chars) {
        if (chars.hasOwnProperty(key) && chars[key] === match) {
          return key;
        }
      }
    });
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    if (!html) {
      return '';
    }

    var re = new RegExp('(' + Object.keys(chars).join('|') + ')', 'g');

    return String(html).replace(re, function(match) {
      return chars[match];
    });
  }
};
