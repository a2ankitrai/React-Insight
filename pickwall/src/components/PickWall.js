import React,{Component} from 'react';
import Pick from './Pick';


class PhotoWall extends Component {
    render() {
      return (
        <div >
            {this.props.posts.map((post,index) => <Pick key={index} post={post}/>)}
        </div>
      );
    }
}

export default PhotoWall
