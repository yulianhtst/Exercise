function solution() {
    function Post(title, content) {
        this.title = title;
        this.content = content;

    }
    Post.prototype.toString = function toString() {
        return `
        Post: ${this.title}
        Content: ${this.content}
      `;
    }

    SocialMediaPost.prototype = Object.create(Post.prototype);
    SocialMediaPost.prototype.constructor = Post


    function SocialMediaPost(...args) {
        Post.call(this, ...args)
        this.comments = []
        this.likes = args[2];
        this.dislikes = args[3];
    }
    SocialMediaPost.prototype.addComment = function addComment(comment) {
        this.comments.push(comment)
    }

    SocialMediaPost.prototype.toString = function toString() {
        const commentsString = this.comments ? this.comments.join(' \n* ') : false;

        return `
 Post: ${this.title}
 Content: ${this.content}
 Rating: ${this.likes - this.dislikes}
 Comments:
* ${commentsString}
      `;
    }


    BlogPost.prototype = Object.create(Post.prototype);
    BlogPost.prototype.constructor = Post

    function BlogPost(...args) {
        Post.call(this, ...args)
        this.views = Number(args[2])
    }
    BlogPost.prototype.view = function view() {
        this.views++
        return this
        //TODO
    }
    BlogPost.prototype.toString = function toString() {
        return `
        Post: ${this.title}
        Content: ${this.content}
        Views: ${this.views}`
    }



    return { Post, SocialMediaPost, BlogPost }
}




// const classes = solution();
// let post = new classes.Post("Post", "Content");
// console.log(post.toString());
// // Post: Post
// // Content: Content
// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
// console.log(scm.toString());
// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// // * Good post
// // * Very good post
// // * Wow!
// let blp = new classes.BlogPost("TestTitle", "TestContent", 10);
// blp.view().view()
// console.log(blp.toString());



// //CHAT GPT SOLUTION 
// function solution() {
//     class Post {
//       constructor(title, content) {
//         this.title = title;
//         this.content = content;
//       }
  
//       toString() {
//         return `Post: ${this.title}\nContent: ${this.content}`;
//       }
//     }
  
//     class SocialMediaPost extends Post {
//       constructor(title, content, likes, dislikes) {
//         super(title, content);
//         this.likes = likes;
//         this.dislikes = dislikes;
//         this.comments = [];
//       }
  
//       addComment(comment) {
//         this.comments.push(comment);
//       }
  
//       toString() {
//         let result = super.toString();
//         result += `\nRating: ${this.likes - this.dislikes}\nComments:\n`;
//         if (this.comments.length > 0) {
//           result += this.comments.map((comment) => `* ${comment}`).join('\n');
//         }
//         return result;
//       }
//     }
  
//     class BlogPost extends Post {
//       constructor(title, content, views) {
//         super(title, content);
//         this.views = views;
//       }
  
//       view() {
//         this.views++;
//         return this;
//       }
  
//       toString() {
//         let result = super.toString();
//         result += `\nViews: ${this.views}`;
//         return result;
//       }
//     }
  
//     return { Post, SocialMediaPost, BlogPost };
//   }
  
//   const classes = solution();
  
//   let post = new classes.Post("Post", "Content");
//   console.log(post.toString());
//   // Post: Post
//   // Content: Content
  
//   let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
//   scm.addComment("Good post");
//   scm.addComment("Very good post");
//   scm.addComment("Wow!");
//   console.log(scm.toString());
//   // Post: TestTitle
//   // Content: TestContent
//   // Rating: -5
//   // Comments:
//   // * Good post
//   // * Very good post
//   // * Wow!
  