import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from './../../images/logo.png';

class Header extends Component{
	componentDidMount() {

        // sidebar open/close

        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
		
        function checkLi(current) {
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
            
			setTimeout(() => {
			
			current.classList.toggle('open');
			
			/* alert(current.className.indexOf('open'));
				if(current.className.indexOf('open') == -1){
					current.classList.toggle('open');
					alert(2);
				}else{
				alert(current.parentNode);
					current.parentNode.classList.add('khelesh');
				} */
				
			}, 100);
						
        }
	}
	render(){
		return(
			<Fragment>
				{/*  header  */}
				<header className="site-header header-transparent">
					<HeaderContent />					
				</header>
				{/*  header End  */}
			</Fragment>
		)
	}
}
function HeaderContent(){
	return(
		<>
			<div className="top-bar">
				<div className="container-fluid">
					<div className="row d-flex justify-content-md-between justify-content-center align-items-center">
						<div className="dlab-topbar-left">
							<ul>
								<li><i className="la la-phone-volume"></i> 0333 5429100</li>
							</ul>
						</div>
						<div className="dlab-topbar-right">
							<ul>
								<li><i className="la la-clock"></i>  Mon - Sat 8.00 - 18.00</li>
								<li><i className="las la-envelope-open"></i> Support@arziyat.com</li>
							</ul>				
						</div>
					</div>
				</div>
			</div>
			{/*   main header  */}
			<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar clearfix ">
					<div className="container-fluid clearfix">
					{ /* website logo */ }
					<div className="logo-header mostion logo-dark">
						<Link to={"./"}><img src={logo} alt="" /></Link>
					</div>
					{/* nav toggle button  */}
					<button className="navbar-toggler collapsed navicon justify-content-end " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
					{/*extra nav  */}
					<div className="extra-nav">
						<div className="extra-cell">
							<a href="https://realestate.arziyat.com/index.php/about-maven/" className="btn btn-primary btnhover13" target="_blank">About Maven</a>
						</div>
					</div>
					<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
						<div className="logo-header d-md-block d-lg-none">
							<Link to={"./"}><img src={logo} alt="" /></Link>
						</div>
						<ul className="nav navbar-nav navbar">	
							<li className="active"><Link to={"#"}>Home</Link>
							</li>
							<li className="active"><a href="https://ads.arziyat.com" target="_blank">Ads</a>
							</li>
							<li className="active"><a href="https://realestate.arziyat.com" target="_blank">Real estate</a>
							</li>
							<li className="active"><a href=" https://rentorim.com/" target="_blank">Rental</a>
							</li>
							<li className="active">
    <a href="/contact-us-1" target="_blank">Contact Us</a>
</li>
						</ul>
						<div className="dlab-social-icon">
							<ul>
								<li><a href='https://www.youtube.com/@arziyatclassifiedplatform5549' className="fa fa-youtube"></a></li>
						<li><a href="https://www.facebook.com/ArziyatOfficial" className="fa fa-facebook mr-1"></a></li>
						<li><a href='https://www.instagram.com/arziyatofficial/' className="fa fa-instagram"></a></li>
						<li><a href='https://www.pinterest.com/arziyatcom' className="fa fa-pinterest"></a></li>
							</ul>
						</div>		
					</div>
				</div>
				</div>
			</div>
		</>
	)
} 
export {HeaderContent};
export default Header;