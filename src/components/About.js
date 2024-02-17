import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'wheat':'#343a40'}}>
      <h2>About TextUtils</h2>
      <p>
        TextUtils is a comprehensive utility application that caters to the
        needs of writers, developers, and anyone who requires efficient text
        manipulation. It's not just a simple text editor; it's a powerful tool
        that can transform your writing and coding experience by providing a
        range of features that streamline text processing.
      </p>
      <p>
        With TextUtils, you can easily convert text to upper or lower case,
        count words and characters, remove extra spaces, and perform other
        common text manipulations. Its user-friendly interface ensures that even
        those new to text processing can quickly learn to use its features
        effectively.
      </p>
      <p>
        The app is designed with a focus on usability, ensuring that each
        feature is intuitive and accessible. It's a one-stop solution for all
        your text manipulation needs, making it a valuable asset for both
        personal and professional use. Whether you're drafting a novel, writing
        code, or simply need to format text for a presentation, TextUtils has
        you covered.
      </p>
      <p>
        But that's not all. TextUtils is also committed to continuous
        improvement. We regularly update the app with new features and
        enhancements, ensuring that it remains at the forefront of text
        processing tools. Stay tuned for future updates that will bring even
        more capabilities to your fingertips.
      </p>
      <p>
        Join the TextUtils community and discover a new way to work with text.
        With TextUtils, text manipulation has never been easier or more
        powerful.
      </p>
    </div>
  );
}
