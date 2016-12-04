/*
 https://medium.freecodecamp.com/creating-a-chat-bot-42861e6a2acd#.4uwn5nzcd
 Loebner Prize I need to easily pass the screener question:


 My name is Bill. What is your name?
 How many letters are there in the name Bill?
 How many letters are there in my name?
 Which is larger, an apple or a watermelon?
 How much is 3 + 2?
 How much is three plus two?
 What is my name?
 If John is taller than Mary, who is the shorter?
 If it were 3:15 AM now, what time would it be in 60 minutes?
 My friend John likes to fish for trout. What does John like to fish for?
 What number comes after seventeen?
 What is the name of my friend who fishes for trout?
 What whould I use to put a nail into a wall?
 What is the 3rd letter in the alphabet?
 What time is it now?
 */





var should = require('chai').should(),
    scapegoat = require('../index'),
    escape = scapegoat.escape,
    unescape = scapegoat.unescape;






describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts \' into &#39;', function() {
    escape('\'').should.equal('&#39;');
  });

  it('converts < into &lt;', function() {
    escape('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function() {
    escape('>').should.equal('&gt;');
  });

  it('returns empty string if called with falsey value', function() {
    escape().should.equal('');
    escape('').should.equal('');
    escape(null).should.equal('');
  });
});

describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &#39; into \'', function() {
    unescape('&#39;').should.equal('\'');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });

  it('does not double unescape values', function() {
    unescape('&amp;quot;').should.equal('&quot;');
  });

  it('returns empty string if called with falsey value', function() {
    unescape().should.equal('');
    unescape('').should.equal('');
    unescape(null).should.equal('');
  });
});
