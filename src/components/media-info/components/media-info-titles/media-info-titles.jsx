import React from 'react'
import PropTypes from 'prop-types'
// import { withDeviceContext } from 'shared/context/device'
// import sliceText from 'shared/utils/slice-text'
// import ContentRating from 'core/components/content-rating'
import './styles.scss'
// import ResolutionLabel from 'legacy/view/components/resolution-label'

const MediaInfoTitles = ({
  isVisible,
  className,
  isExcerpts,
  nameCategory,
  isVideo,
  info,
  isClosed,
}) => {
  const hasType = info.type
  return isVisible === false ? null : (
    <div className={`about ${className} ${isExcerpts ? ' excerpts' : ''}`}>
      {nameCategory ? <h2>{nameCategory}</h2> : ''}
      {isVideo ? (
        <>
          <span className={`title ${isExcerpts ? ' excerpts' : ''}`}>
            {hasType && `${info.title} `}
            {/* {info.contentRating && (
              // <ContentRating
              //   contentRating={info.contentRating}
              //   isSelfRatedContent={info.selfRatedContent}
              //   isContinueWatching
              // />
            )} */}
            {/* <ResolutionLabel resolutions={info?.technicalSpecs?.resolutions} /> */}
          </span>
          <h1 className={isExcerpts ? 'excerpts' : ''}>
            {info.seasonNumber && info.episodeNumber
              ? `T${info.seasonNumber} E${info.episodeNumber} - \
              ${info.headline}`
              : info.headline}
          </h1>
          {info.watchedProgress !== null && info.watchedPercent > 0 ? (
            <p className="progress">
              <span className="bar-progress">
                <span style={{ width: `${info.watchedPercent}%` }} />
              </span>{' '}
              {info.formattedRemainingTime} restantes
            </p>
          ) : (
            <span className={`duration ${isExcerpts ? ' excerpts' : ''}`}>
              {info.formattedDuration}
            </span>
          )}
        </>
      ) : (
        <>
          {info.cameFromTitle && (
            <div className="brand-logo">
              {info.contentBrand?.trimmedLogo && (
                <img src={info.contentBrand.trimmedLogo} alt={info.contentBrand.name} />
              )}
            </div>
          )}
          {info.logo ? (
            <img className="logo" src={info.logo} alt={info.title} />
          ) : (
            <h1>{info.headline}</h1>
          )}
          {!info.logo && !isClosed && (
            <div className="info">
              {/* {info.contentRating && (
                // <ContentRating
                //   contentRating={info.contentRating}
                //   isSelfRatedContent={info.selfRatedContent}
                // />
              )} */}
              {!info.selfRatedContent && (
                <span className="capitalized-strings">{info.labelContentRatingCriteria}</span>
              )}
              {/* <ResolutionLabel resolutions={info?.technicalSpecs?.resolutions} /> */}
            </div>
          )}
          {info.watchedPercent >= 0 && !isClosed ? (
            <>
              {hasType && (
                <p className="title">
                  {info.seasonNumber && `T${info.seasonNumber}`}
                  {info.episodeNumber && ` E${info.episodeNumber} - `}
                  {info.title}
                </p>
              )}

              {info.watchedPercent > 0 && (
                <p className="progress">
                  <span className="bar-progress">
                    <span style={{ width: `${info.watchedPercent}%` }} />
                  </span>{' '}
                  {info.formattedRemainingTime} restantes
                </p>
              )}
            </>
          ) : null}
          {!isClosed && <p>{info.description}</p>}
        </>
      )}
    </div>
  )
}
MediaInfoTitles.propTypes = {
  isVisible: PropTypes.bool,
  isClosed: PropTypes.bool,
  isVideo: PropTypes.bool,
  isExcerpts: PropTypes.bool,
  nameCategory: PropTypes.string,
  technicalSpecs: PropTypes.shape({
    resolutions: PropTypes.array,
  }),
  info: PropTypes.shape({
    isVideo: PropTypes.bool,
    watchedProgress: PropTypes.number,
    title: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    technicalSpecs: PropTypes.shape({
      resolutions: PropTypes.array,
    }),
    selfRatedContent: PropTypes.bool,
    type: PropTypes.string,
    contentRating: PropTypes.string,
    labelContentRatingCriteria: PropTypes.string,
    watchedPercent: PropTypes.number,
    formattedRemainingTime: PropTypes.string,
    formattedDuration: PropTypes.string,
    episodeNumber: PropTypes.number,
    seasonNumber: PropTypes.number,
    contentBrand: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      trimmedLogo: PropTypes.string,
    }),
    cameFromTitle: PropTypes.bool,
  }),
  className: PropTypes.string,
}

MediaInfoTitles.defaultProps = {
  isVisible: true,
  isClosed: false,
  isExcerpts: false,
  isVideo: false,
  nameCategory: '',
  technicalSpecs: {
    resolutions: [],
  },
  info: {
    isVideo: false,
    watchedProgress: 0,
    title: '',
    headline: '',
    description: '',
    selfRatedContent: false,
    contentRating: '',
    technicalSpecs: {
      resolutions: [],
    },
    type: '',
    labelContentRatingCriteria: '',
    watchedPercent: 0,
    formattedRemainingTime: '0',
    formattedDuration: '0',
    logo: '',
    contentBrand: {
      id: '',
      name: '',
      trimmedLogo: '',
    },
    cameFromTitle: false,
  },
  className: '',
}

export default MediaInfoTitles
