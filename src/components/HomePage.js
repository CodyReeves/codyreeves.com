import React, { Component } from 'react'
import Banner from './Banner'
import ContactPage from './Contact'
import BannerImageUrl from '../images/bg.jpg'
import ImageUrl from '../images/example.jpg'
import BannerVidMp from '../images/home.mp4'
import BannerVidWeb from '../images/home.webm'
import { getHome } from '../apis/siteContent.js'
import { Link } from 'react-router'
import PageSection from './PageSection'
import ListServices from './ListServices'

class HomePage extends Component {

	render() {

		const HomePage = getHome();
		const bannerSub = HomePage.banner.subHeading;
		const bannerTitle = HomePage.banner.heading;
		
		const homeSections = HomePage.sections.map((row) => {
			return (
				<div key={row.key}>
					<PageSection
						type="special"
						container="true"
						className={row.classname}
						titleLarge={row.titleLarge}
						titleSmall={row.titleSmall}
						titleLargeClass={row.titleLargeClass}
						titleSmallClass={row.titleSmallClass}
						textFollow={row.followText}
					>
					{row.key === 'about' &&
						<div className="left col-xs-12 col-sm-6">
							<p className="text">{row.aboutText}</p>
						</div>}

					{row.key === 'about' && 
						<div className="right extra col-xs-12 col-sm-6">
							<blockquote>{row.aboutQuote}</blockquote>
						</div>}

					{row.key === 'services' &&
						<div className="col-xs-12 col-sm-12 pos-rel">
							<span className="btn view-design">Design</span>
							<span className="btn view-develop">Development</span>
							<ListServices />
							<Link className="btn-cta pull-right mar-top-15" to="/services">More Detials</Link>
						</div>}

					{row.key === 'cases' &&

						<div className="cta">
							<Link className="btn-cta center mar-15-top" to="/cases">View More Cases</Link>
						</div>}
					</PageSection>
				</div>
			)
		});

		return (
			<div>
				<Banner imageUrl={BannerImageUrl}>
					<h1 className="heading-special"><span className="">{bannerTitle}</span></h1>
					<h4 className="heading-top"><span className="">{bannerSub}</span></h4>
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
				{homeSections}
				<ContactPage />
			</div>
		);

	}
}

export default HomePage
