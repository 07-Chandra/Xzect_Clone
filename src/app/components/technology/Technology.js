import React from 'react'
import './Technology.css'
import Tech from '../tech/Tech';
import Link from 'next/link';
function Technology() {
  return (
      <div className="tech-container">
          <div className="header">
              <h1 className="header-title">
                  Leverage our software & hardware expertise
              </h1>
              <h4 className="header-para">
                  Use our services and tech expertise to create disruptive
                  products & solutions that can revolutionize your business and
                  stay ahead with evolving technological advancements.
              </h4>
          </div>
          <div className="tech-stacks">
              <div className="tech-stack-div">
                  <Tech
                      name="C++"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/cpp.png"
                  />
                  <Tech
                      name="Python"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/python.png"
                  />
                  <Tech
                      name="Golang"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/golang.png"
                  />
                  <Tech
                      name="Rust"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/rust.png"
                  />
                  <Tech
                      name="Nodejs"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/nodejs.png"
                  />
                  <Tech
                      name="Reactjs"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/react.png"
                  />
                  <Tech
                      name="Angular"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/angular.png"
                  />
                  <Tech
                      name="Vuejs"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/vuejs.png"
                  />
                  <Tech
                      name="Android"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/android.png"
                  />
                  <Tech
                      name="swift"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/swift.png"
                  />
                  <Tech
                      name="Wordpress"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/wordpress.png"
                  />
                  <Tech
                      name="Magento"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/magento.png"
                  />
                  <Tech
                      name="Laravel"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/laravel.png"
                  />
                  <Tech
                      name="Codeigniter"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png"
                  />
                  <Tech
                      name="Django"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/django.png"
                  />
                  <Tech
                      name="Solidity"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/solidity.png"
                  />
                  <Tech
                      name="Flutter"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/flutter.png"
                  />
                  <Tech
                      name="MySQL"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/mysql.png"
                  />
                  <Tech
                      name="MongoDB"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/mongodb.png"
                  />
                  <Tech
                      name="GraphQL"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/graphql.png"
                  />
                  <Tech
                      name="Docker"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/docker.png"
                  />
                  <Tech
                      name="Nginx"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/nginx.png"
                  />
                  <Tech
                      name="Ubuntu"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/ubuntu.png"
                  />
                  <Tech
                      name="Tensorflow"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/tensorflow.png"
                  />
                  <Tech
                      name="Keras"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/keras.png"
                  />
                  <Tech
                      name="OpernCV"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/opencv.png"
                  />
                  <Tech
                      name="Arduino"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/arduino.png"
                  />
                  <Tech
                      name="Ros"
                      url="https://www.xzect.com/assets/images/icons/tech-stack/ros.png"
                  />
              </div>
          </div>

          <div className="btn-div">
              <Link className="button" href="#">
                  Explore Our Entire Tech Stack
              </Link>
          </div>
      </div>
  );
}

export default Technology