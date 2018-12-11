/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Page404 extends React.Component {
  render() {

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <h1> Page Not Found</h1>
        </Container>
      </div>
    );
  }
}

module.exports = Page404;
