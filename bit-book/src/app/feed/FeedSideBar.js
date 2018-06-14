// import React from 'react';
// import { Link } from 'react-router-dom';

// export class FeedSideBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggleMenu: false,
//             toggleCreateNew: false,
//             menuClass: "",
//             createNewClass: ""
//         }
//     }

//     toggleMenu = () => {
//         let toggle = !this.state.toggleMenu;
//         let navClass = toggle ? "open-menu" : "";
//         this.setState({
//             toggleMenu: toggle,
//             menuClass: navClass
//         });
//     }

//     toggleCreateNew = () => {
//         let toggle = !this.state.toggleCreateNew;
//         let navClass = toggle ? "open-create-new" : "";
//         this.setState({
//             toggleCreateNew: toggle,
//             createNewClass: navClass
//         });
//     }

//     createPost = () => {

//     }

//     render() {
//         return (
//             <div className="feed-sidebar" >
//                 <div className="filter-posts">
//                     <div className="feed-sidebar-menu" onClick={this.toggleMenu}>Show on feed<i className="fas fa-caret-down" ></i></div >
//                     <ul className={this.state.menuClass}>
//                         <li><Link to="/home">All posts</Link></li>
//                         <li><Link to="/videos">Videos</Link></li>
//                         <li><Link to="/images">Images</Link></li>
//                         <li><Link to="/text">Text</Link></li>
//                     </ul>
//                 </div>
//                 <div className="add-post">
//                     <div className={"create-new-options " + this.state.createNewClass}>
//                         <div>
//                             <div id="create-post" onClick={this.createPost}></div>
//                             <div className="create-new-type">Post</div>
//                         </div>
//                         <div>
//                             <div id="create-image"><Link to=""></Link></div>
//                             <div className="create-new-type">Image</div>
//                         </div>
//                         <div>
//                             <div id="create-video"><Link to=""></Link></div>
//                             <div className="create-new-type">Video</div>
//                         </div>
//                     </div>

//                     <div className="create-new-post" onClick={this.toggleCreateNew}>
//                         <div className={"new-post " + this.state.createNewClass}>New post</div>
//                         <div className="plus">+</div>
//                     </div>
//                 </div>
//             </div >
//         );
//     }
// }


