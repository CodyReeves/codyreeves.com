import React, { Component } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import ContactFormWrapper from '../components/ContactFormWrapper';
import BannerImageUrl from '../images/bg.jpg';
import BannerVidMp from '../images/home.mp4';
import BannerVidWeb from '../images/home.webm';
import { getHome } from '../apis/siteContent';
import PageSection from '../components/PageSection';
import ListServices from '../components/ListServices';
import CaseSample from '../components/CaseSample';
import SideProjectButton from '../components/SideProjectButton';
import PageHead from '../components/Head';
import BannerVideo from '../components/BannerVideo';

class HomePageContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // Get data for page
    const HomePage = getHome();
    // const isMobile = window.innerWidth <= 500;
    const isTab = window.innerWidth <= 992;
    // Set up for banner content
    const bannerSub = HomePage.banner.subHeading;
    const bannerTitle = HomePage.banner.heading;

    // Loops through map with key of samples
    const CaseSamples = caseSampleMap => {
      return caseSampleMap.samples.map(sample => {
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
            <LazyLoad>
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
            </LazyLoad>
          </div>
        );
      });
    };

    const homeSections = HomePage.sections.map(row => {
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
              <p className="text-center mar-30 pad-30 no-mar-bottom">
                From web, digital branding to startup products, I specialise in online customer experiences & brand development, combining digital craftsmanship with innovative thinking to deliver user-first digital solutions. <br /><br /><small>Here are some of the skills I can provide.</small>
              </p>
              <span className="btn view-design">Design</span>
              <span className="btn view-develop">Development</span>
              <ListServices />
              {/* <Link className="btn-cta pull-right mar-top-15" to="/design-process">
                  Learn about the design & development process</Link> */}
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
      );
    });

    return (
      <div className="home-page">
        <PageHead />
        <BannerVideo
          imageUrl={BannerImageUrl}
          title={bannerTitle}
          subTitle={bannerSub}
          videoMp4={BannerVidMp}
          videoWeb={BannerVidWeb}
          isTab={isTab}
        />
        {homeSections}
        <SideProjectButton />
        <ContactFormWrapper />
      </div>
    );
  }
}

export default HomePageContainer;
