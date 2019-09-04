import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import 'common/font/iconfont.css';
class Header extends Component{
    render(){
        return(
            <div className='cd-header'>
                <div className='cd-header-img'>
                    <div className='cd-icon cd-icon-cherry-blossom' id='logo'></div>
                    <div id='name'>React项目实践</div>
                </div>
                <div className='cd-header-title'>
                    <ul>
                        <li><Link to='/' className='link'>首页</Link></li>
                        <li>javaScript</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>小程序</li>
                    </ul>
                </div>
                <div className='cd-header-login'>
                    <Link to='/login' className='link'>
                       登录 
                    </Link>
                </div>
            </div>
        );
    }
}
export default Header;