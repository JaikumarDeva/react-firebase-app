import React from 'react';
import banner from './sunraise.jpg';

function LeftSideComponent({ fColor, BtnTextColor1, BtnbgColor, fontSize, titleColor }) {
  console.log(titleColor,'titleColor');
  return (
    <>
     <h3 className="cmp-title" style={{color: titleColor}}>Teaser component</h3>
      <div className="cmp-wrapper">
        <div className="teaser">
          <div id="teaser-57f02f91a4" className="cmp-teaser" data-cmp-data-layer="{&quot;teaser-57f02f91a4&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/teaser&quot;,&quot;dc:title&quot;:&quot;Linked Teaser&quot;,&quot;dc:description&quot;:&quot;<p>Teaser Description</p>&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-content/teaser.html&quot;}}">
            <a className="cmp-teaser__link" data-cmp-clickable="" href="/content/core-components-examples/library/core-content/teaser.html">
              <div className="cmp-teaser__content">
                <h2  style={{ color: fColor,fontSize: fontSize }} className="cmp-teaser__title"> Linked Teaser </h2>
                <div  style={{ color: fColor,fontSize: fontSize }} className="cmp-teaser__description">
                  <p>Teaser Description</p>
                </div>
              </div>
              <div className="cmp-teaser__image">
                <div data-cmp-is="image" data-cmp-widths="600,800,1000,1200,1600" data-cmp-src="/content/core-components-examples/library/core-content/teaser/_jcr_content/root/responsivegrid/demo_1789748122/component/teaser.coreimg.82{.width}.jpeg" data-asset-id="c58c09f6-e382-4698-bfbd-e8c8d37712c8" data-cmp-filereference="/content/dam/core-components-examples/library/sample-assets/lava-rock-formation.jpg" id="teaser-57f02f91a4-image" data-cmp-data-layer="{&quot;teaser-57f02f91a4-image&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/image&quot;,&quot;dc:title&quot;:&quot;Gray lava rock formation&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-content/teaser.html&quot;,&quot;image&quot;:{&quot;repo:id&quot;:&quot;c58c09f6-e382-4698-bfbd-e8c8d37712c8&quot;,&quot;repo:modifyDate&quot;:&quot;1970-01-01T00:00:00Z&quot;,&quot;@type&quot;:&quot;image/jpeg&quot;,&quot;repo:path&quot;:&quot;/content/dam/core-components-examples/library/sample-assets/lava-rock-formation.jpg&quot;}}}" data-cmp-hook-image="imageV3" className="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
                  <img className='w-100' src={banner} />
                  <meta itemprop="caption" content="Gray lava rock formation" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <h3 className="cmp-title"  style={{color: titleColor}}>Text Component</h3>
      <div className="cmp-wrapper"> <div className="text" style={{ fontSize: fontSize, color: fColor }}>
        <div data-cmp-data-layer="{&quot;text-7569a6a7ea&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/text&quot;,&quot;xdm:text&quot;:&quot;<p><b>Bold </b>can be used to emphasize a word or phrase, as can <u>underline</u> and <i>italics.&amp;nbsp;</i><sup>Superscript</sup> and <sub>subscript</sub> are useful for mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections:</p><blockquote>&amp;quot;<i>Be yourself; everyone else is already taken&amp;quot;</i></blockquote><blockquote>- Oscar Wilde</blockquote>&quot;}}" id="text-7569a6a7ea" className="cmp-text">
          <p><b>Bold </b>can be used to emphasize a word or phrase, as can <u>underline</u> and <i>italics.&nbsp;</i><sup>Superscript</sup> and <sub>subscript</sub> are useful for mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections:</p>
          <blockquote>"<i>Be yourself; everyone else is already taken"</i></blockquote>
          <blockquote>- Oscar Wilde</blockquote>
        </div>
      </div></div>

      <h3 className="cmp-title"  style={{color: titleColor}}>Button Component</h3>
      <div className="cmp-wrapper">

        <div style={{ color: fColor }} className="button">
          <button style={{ color: BtnTextColor1, backgroundColor: BtnbgColor }} type="button" id="button-5487aab983" className="cmp-button" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-5487aab983&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/button&quot;,&quot;dc:title&quot;:&quot;Button&quot;}}">
            <span className="cmp-button__text">Button</span>
          </button>
          <button style={{ color: BtnTextColor1, borderColor: BtnTextColor1 }} type="button" id="button-5487aab983" className="cmp-button transparent_btn" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-5487aab983&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/button&quot;,&quot;dc:title&quot;:&quot;Button&quot;}}">
            <span className="cmp-button__text">Button</span>
          </button>
        </div>
      </div>


      <h3 className="cmp-title"  style={{color: titleColor}}>Breadcrumb Component</h3>
      <div className="cmp-wrapper">
        <div className="breadcrumb">
          <nav id="breadcrumb-480245d3af" className="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&quot;breadcrumb-480245d3af&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb&quot;}}">
            <ol className="cmp-breadcrumb__list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-9bee4d4454&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2019-12-20T18:35:24Z&quot;,&quot;dc:title&quot;:&quot;Component Library&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library.html">
                  <span itemprop="name">Component Library</span>
                </a>
              </li>
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-3a0f66ac7b&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;dc:title&quot;:&quot;Component Library&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library.html">
                  <span itemprop="name">Component Library</span>
                </a>
              </li>
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-7080538dd6&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;dc:title&quot;:&quot;Breadcrumb&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html">
                  <span itemprop="name">Breadcrumb</span>
                </a>
              </li>
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-2ae1704812&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Level 1&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html">
                  <span itemprop="name">Level 1</span>
                </a>
              </li>
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-2ae1704812&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Level 1&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html">
                  <span itemprop="name">Level 2</span>
                </a>
              </li>
              <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-2ae1704812&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Level 1&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html">
                  <span itemprop="name">Breadcrumb 2</span>
                </a>
              </li>

            </ol>
          </nav>
        </div>
      </div>

      <h3 className="cmp-title"  style={{color: titleColor}}>Container With Text and title</h3>
      <div className="cmp-wrapper">
        <div style={{ color: fColor }} className="container responsivegrid">
          <div id="container-97c410ebe3" className="cmp-container">
            <div className="title">
              <div data-cmp-data-layer="{&quot;title-77d4082a7c&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/title&quot;,&quot;dc:title&quot;:&quot;Lorem Ipsum&quot;}}" id="title-77d4082a7c" className="cmp-title">
                <h2 style={{ fontSize: fontSize, color: fColor }} className="cmp-title__text">Lorem Ipsum</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="cmp-title"  style={{color: titleColor}}>Form component</h3>
      <div className="cmp-wrapper">
        <div style={{ color: fColor }} className="text aem-GridColumn aem-GridColumn--default--12"><div className="cmp-form-text " data-cmp-is="formText" data-minlen="1" data-maxlen="1" data-rows="2" data-enable-email-verification-endpoint="false" data-enable-password-strength="false" data-disable-jslib="false" data-disable-flagicon="false" data-disable-dropdown="false" data-special-characters="false" data-validation-required="false">
          <label for="form-text-183451090">First name</label>
          <input className="cmp-form-text__text" data-cmp-hook-form-text="input" type="text" id="form-text-183451090" name="Test" data-textonly-type="false" aria-invalid="true" />

        </div>
        </div>
        <div style={{ color: fColor }} className="text aem-GridColumn aem-GridColumn--default--12"><div className="cmp-form-text " data-cmp-is="formText" data-minlen="1" data-maxlen="1" data-rows="2" data-enable-email-verification-endpoint="false" data-enable-password-strength="false" data-disable-jslib="false" data-disable-flagicon="false" data-disable-dropdown="false" data-special-characters="false" data-validation-required="false">
          <label for="form-text-183451090">Last name</label>
          <input className="cmp-form-text__text" data-cmp-hook-form-text="input" type="text" id="form-text-183451091" name="Test" data-textonly-type="false" aria-invalid="true" />

        </div>
        </div>
      </div>

     


    </>
  );
}
export default LeftSideComponent;
