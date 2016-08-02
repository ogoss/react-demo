'use strict';
// TODO: 读取其他JS中定义的组件

// let data = [
//   {id: 1, author: 'aaa', text: 'This is aaa comment'},
//   {id: 2, author: 'bbb', text: 'This is bbb comment'}
// ];

let CommentBox = React.createClass({
  // 初始化评论列表数据
  getInitialState() {
    return {
      data: []
    };
  },
  // 调用服务器端数据，使用this.setState()方法渲染数据
  // 此处使用setTimeout()模拟
  componentDidMount() {
    let data = [
      {id: 1, author: 'aaa1', text: 'This is aaa comment'},
      {id: 2, author: 'bbb1', text: 'This is bbb comment'}
    ];
    setTimeout(() => (
      this.setState({
        data: data
      })
    ), 1000);
  },
  // 处理子组件提交事件, 此处使用setTimeout和Array.concat()模拟服务器数据
  handleCommentSubmit(comment) {
    let oldComment = this.state.data,
        newComment = oldComment.concat([
          {id: Date.now(), author: comment.author, text: comment.text}
        ]);

    setTimeout(() => (
      this.setState({
        data: newComment
      })
    ), 1000);
  },
  render() {
    return (
      <div className="commentBox">
        This is a commentbox!
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

let CommentList = React.createClass({
  render() {
    let commentNodes = this.props.data.map((data) => (
        <Comment author={data.author} key={data.id}>
          {data.text}
        </Comment>
      )
    );
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
// {this.props.children} 可以访问组件内嵌的任何元素
let Comment = React.createClass({
  rawMarkup() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());
    return {
      __html: rawMarkup
    }
  },
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

let CommentForm = React.createClass({
  // 初始化表单数据
  getInitialState() {
    return {
      author: '',
      text: ''
    };
  },
  // 处理input数据
  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  },
  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  },
  // 相应submit事件
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let author = this.state.author.trim(),
        text = this.state.text.trim();

    if(!text || !author) {
      return;
    }
    // 调用父组件中的表单相应事件
    this.props.onCommentSubmit({
      author: author,
      text: text
    });

    this.setState({
      author: '',
      text: ''
    });
  },
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.author} onChange={this.handleAuthorChange} placeholder="your name" />
        <input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="your text" />
        <input type="submit" value="post" />
      </form>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('app')
