import React from 'react'
import Banner from './Banner'
import ContactPage from './Contact'
import BannerImageUrl from '../images/bg.jpg'
import ImageUrl from '../images/example.jpg'
import BannerVidMp from '../images/home.mp4'
import BannerVidWeb from '../images/home.webm'
import { getHome } from '../apis/siteContent.js'
import { Link } from 'react-router'

const HomePage = () => {
	const content = {
		title: 'Material Design Lite',
		article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
	}

	const home = getHome();
	
	return (
		<div>
			<Banner imageUrl={BannerImageUrl}>
				<h1 className="heading-special"><span className="">{home.bannerHeading}</span></h1>
				<h4 className="heading-top"><span className="">{home.bannerSubHeading}</span></h4>
				<div className="video">
					<video poster="" id="bgvid" playsInline autoPlay muted loop>
						<source src={BannerVidWeb} type="video/webm" />
						<source src={BannerVidMp} type="video/mp4" />
					</video>
				</div>
				<div className="more">
					Show More
				</div>
			</Banner>
			<section className="special">
				<div className="section-title"><span>What Im All About</span></div>
				<div className="container">
					<h2 className="back">About Us</h2>
					<h3 className="sub">About About About About</h3>
					{/*<img src={ImageUrl} className="img-responsive img-float" />*/}
					<div className="row">
						<div className="left col-xs-12 col-sm-6">
							<p className="text">ets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now</p>
						</div>
						<div className="right extra col-xs-12 col-sm-6">
							<blockquote>u add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers,</blockquote>
						</div>
					</div>
				</div>
			</section>
			<section className="special services">
				<div className="section-title"><span>What I Can Do For You</span></div>
				<div className="container">
					<h2 className="back">Services</h2>
					<h3 className="sub bump-up">Services Services Services Services</h3>
					<div className="row">
						<div className="col-xs-12 col-sm-12 pos-rel">
							<span className="btn view-design">Design</span>
							<span className="btn view-develop">Development</span>
							<ul className="list-plian no-margin">
								<li className="design">This is a service</li>
								<li className="develop">This is a service</li>
								<li className="design">This is a service</li>
								<li className="design">This is a service</li>
								<li className="develop">This is a service</li>
								<li className="develop">This is a service</li>
								<li className="design">This is a service</li>
								<li className="develop">This is a service</li>
							</ul>
						</div>
					</div>
					<Link className="btn-cta pull-right mar-top-15" to="/services">More Detials</Link>
				</div>
			</section>
			<section className="special sample-portfolio">
				<div className="section-title"><span>What I Hve Done In The Past</span></div>
				<div className="container">
					<h2 className="back">Cases</h2>
					<h3 className="sub bump-up">dd a Material Design look and feel to your websites. It doesn’t rely on any JavaScript framework</h3>
					<div className="sample">
						<div className="row">
							<div className="col-xs-12 col-sm-3 details">
								<div className="details-wrapper">
									<strong>text is here</strong><br />
									<span>text is here </span><br />
									<span>text is here </span><br />
									<p>text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here
								</p>
									<a className="btn-more" href="#">See More</a>
								</div>
							</div>
							<div className="col-xs-12 col-sm card">
								<a href="#">
									<h3>This the title</h3>
									<div className="image-wrapper">
										<img src={ImageUrl} className="img-responsive" />
										<div className="image" style={{ backgroundImage: 'url(' + ImageUrl + ')' }}>
										</div>
									</div>
								</a>
								<h3 className="title-lg">This the title</h3>
							</div>
						</div>
					</div>
					<div className="sample right">
						<div className="row">
							<div className="col-xs-12 col-sm card">
								<a href="#">
									<h3>This the title</h3>
									<div className="image-wrapper">
										<img src={ImageUrl} className="img-responsive" />
										<div className="image" style={{ backgroundImage: 'url(' + ImageUrl + ')' }}>
										</div>
									</div>
								</a>
								<h3 className="title-lg">This the title</h3>
							</div>
							<div className="col-xs-12 col-sm-3 details">
								<div className="details-wrapper">
									<strong>text is here</strong><br />
									<span>text is here </span><br />
									<span>text is here </span><br />
									<p>text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here
								</p>
									<a className="btn-more" href="#">See More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="sample">
						<div className="row">
							<div className="col-xs-12 col-sm-3 details">
								<div className="details-wrapper">
									<strong>text is here</strong><br />
									<span>text is here </span><br />
									<span>text is here </span><br />
									<p>text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here
								</p>
									<a className="btn-more" href="#">See More</a>
								</div>
							</div>
							<div className="col-xs-12 col-sm card">
								<a href="#">
									<h3>This the title</h3>
									<div className="image-wrapper">
										<img src={ImageUrl} className="img-responsive" />
										<div className="image" style={{ backgroundImage: 'url(' + ImageUrl + ')' }}>
										</div>
									</div>
								</a>
								<h3 className="title-lg">This the title</h3>
							</div>
						</div>
					</div>
					<div className="cta">
						<Link className="btn-cta center mar-15-top" to="/portfolio">View More Cases</Link>
					</div>
				</div>
			</section>
			<ContactPage />
		</div>
	)
}


export default HomePage
