import React, { Component } from 'react'
import Banner from '../components/Banner'
import ContactFormWrapper from '../components/ContactFormWrapper'
import BannerImageUrl from '../images/bg.jpg'
import BannerVidMp from '../images/home.mp4'
import BannerVidWeb from '../images/home.webm'
import { getHome } from '../apis/siteContent.js'
import { Link } from 'react-router'
import PageSection from '../components/PageSection'
import ListServices from '../components/ListServices'
import CaseSample from '../components/CaseSample'
import SideProjectButton from '../components/SideProjectButton'
import { Helmet } from 'react-helmet';

class HomePage extends Component {
	componentDidMount () {
		window.scrollTo(0, 0)
	}

	render() {

		//Get data for page
		const HomePage = getHome();

		// Set up for banner content
		const bannerSub = HomePage.banner.subHeading;
		const bannerTitle = HomePage.banner.heading;

		// Loops through map with key of samples
		const CaseSamples = (caseSampleMap) => {
			return caseSampleMap.samples.map((sample) => {

				// Setting up data from map
				const sampleKey = sample.key;
				const sampleImage = sample.imageUrl;
				const sampleImagePlacment = sample.imagePlacement;
				const sampleTitleLarge = sample.titleLarge;
				const sampleTitleSmall = sample.titleSmall;
				const sampleTitleLargeClass = sample.titleLargeClass;
				const sampleTitleSmallClass = sample.titleSmallClass;
				const sampleStrongText = sample.strong;
				const sampleSpanText = sample.span;
				const sampleTags = sample.tags;
				const sampleText = sample.text;

				return (
					<div key={sampleKey}>
						<CaseSample
							imageUrl={`/img/${sampleImage}`}
							imagePlacement={sampleImagePlacment}
							titleLarge={sampleTitleLarge}
							titleSmall={sampleTitleSmall}
							titleSmallClass={sampleTitleSmallClass}
							titleLargeClass={sampleTitleLargeClass}
						>
							<strong>{sampleStrongText}</strong><br />
							<span>{sampleSpanText}</span><br />
							<span>{sampleTags}</span><br />
							<p>{sampleText}</p>
						</CaseSample>
					</div>
				)
			});
		}

		const homeSections = HomePage.sections.map((row) => {

			const key = row.key;
			const classname = row.classname;
			const titleLarge = row.titleLarge;
			const titleSmall = row.titleSmall;
			const titleLargeClass = row.titleLargeClass;
			const titleSmallClass = row.titleLargeClass;
			const followText = row.followText;
			const aboutText = row.aboutText;
			const aboutQuote = row.aboutQuote;

			return (
				<div key={key}>
					<PageSection
						type="special"
						container="true"
						className={classname}
						titleLarge={titleLarge}
						titleSmall={titleSmall}
						titleLargeClass={titleLargeClass}
						titleSmallClass={titleSmallClass}
						textFollow={followText}
					>
					{key === 'about' &&
						<div className="left col-xs-12 col-sm-6">
							<p className="text">{aboutText}</p>
						</div>}

					{key === 'about' &&
						<div className="right extra col-xs-12 col-sm-6">
							<blockquote>{aboutQuote}</blockquote>
						</div>}

					{key === 'services' &&
						<div className="col-xs-12 col-sm-12 pos-rel">
							<p className="text-center">Here are a few of my skills!</p>
							<span className="btn view-design">Design</span>
							<span className="btn view-develop">Development</span>
							<ListServices />
							{/* <Link className="btn-cta pull-right mar-top-15" to="/design-process">Learn about the design & development process</Link> */}
						</div>}

					{key === 'cases' &&
						<div>
							{CaseSamples(HomePage)}
							<div className="cta">
								<Link className="btn-cta center mar-15-top" to="/cases">View More Cases</Link>
							</div>
						</div>}
					</PageSection>
				</div>
			)
		});

		return (
			<div className="home-page">
				<Helmet>
					<title>Cody Reeves | Digital Design & Development</title>
					<meta name="description" content="I'm Cody Reeves, a full time designer/developer and a part time entrepreneur. I have 4+ years of experience, working on wide variety of projects from designing company brands to developing enterprise software." />
					<meta property="og:title" content="Cody Reeves | Digital Design & Development"/>
					<meta property="og:description" content="I'm Cody Reeves, a full time designer/developer and a part time entrepreneur. I have 4+ years of experience, working on wide variety of projects from designing company brands to developing enterprise software."/>
					<meta property="og:url" content={`http://codyreeves.com/`}/>
				</Helmet>
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
				<SideProjectButton />
				<ContactFormWrapper />
			</div>
		);

	}
}

export default HomePage
