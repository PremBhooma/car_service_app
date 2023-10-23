import React from "react";
import ComponentsNav from "../Components/ComponentsNav";

import "./Category.css";
import Comments from "../Components/Comments";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

const Category = () => {
  return (
    <>
      <ComponentsNav />
      <div className="cat-Services">
        <p>Periodic Service</p>
        <p>AC Service & Repair</p>
        <p>Batteries</p>
        <p>Tyres & Wheel</p>
        <p>Denting & Painting</p>
      </div>

      <div className="cat-blocks">
        <div className="title">
          <p>Scheduled Package</p>
        </div>

        <div className="cat-box">
          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c625/88d2/d63425b6dd5d4aae4081f001ea73431b?Expires=1699228800&Signature=i7Ybvu1Vbie9LUsExgVA4Rb7qEe7MuNICzWPUFatYNrdGvnKprWmgx7tptV9CdBam1Vyw7Th4NbcyPXfArChawihP4GiS7I6ZG2xpPunyg2cl9ufeim-D2dGn0TfpZN1qV5kSumSDdfb-r6yOJEo~NwQEs3HqCiypp3eqEM-3vuv-MaH0147f6Br2bZJWUMefBrYQ8OI2h05RgCsEKMFOpv4m3TSXDnZbj4RCZXY63RgaWZG70qGLJlNU1AuNhSoRZDRx02R2iVJ1jRh3ACenK7bSp81P1CSCwK804whaA9r12CEyXQOB~IqY1wYvFA9d-naafLeve8oQ1gYarlgJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Mini Service</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 2299</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/421a/3b7c/10f3c9531f7a61cf607b0b399aaf58a2?Expires=1699228800&Signature=nECCd5RN9cEdAQA5Abnt4ZVsedrh4SKdtVbskEIinhCJ-JBfnTApQFYIDQ7~~lnNmmzCs3TGbSjZEQLKy4MmFUEU1zLR33urQBHpeupogI3wy~wNlvocdYs9xkZOlzXkD13hBKsopIN-HhrOZMDoadzZ3mg~a29oV7FNEZje8mlUnwe-DG5cuwJkYjBRZnOVKJLgkxKtLKkEwNHsSyjPQxt47G9COzL~Z3HTro72nbv3D-esXZrYc6GU1Kpn~b019FTW6H5RcepPgpypfCX0VPUmC5co8NUhMiUFGzvoFf0GOzjvpEH8lA4rYv4xoGiKuQ0mA-Q5eZLLSTyroaZHdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Medium Services</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 2299</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/85b3/03ee/04af68536b7ea12be5986b165b1018fa?Expires=1699228800&Signature=g2cg37moYHSYjvV8EtBaHWjhzSs-dwt4Gc4T-2pQF5pC4T5Ys6uRdT1o-9uuUHZFC-dU~InpzYrWRMUX0mIZlEPAXYMyd4jHLrumzkVz7vu6tPjSMYYGkRLrns-KIa25JL322CxqsQJ2u3AoStomOq5Pci8h1QZD685YLY2rzM2czQEF5BFO3XxJdMID77rX3b8KiRjBhFZukNikQIi-DzHuQ9Qe7gXB0qWGIyP8jSJEtO7T~cgGQO-kDQZRwr1vfTQW4MaBZ670zHrIh~h00l6wj08cN-BdkS9ogGn3PhVb4vZ6kyFUSUkOE1xLJGkHYEpJflSQj241ZCIJF9I3wQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Major Service</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 4799</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>

            <hr />
          </div>
        </div>

        <div className="title mt-5">
          <p>Brake Maintenance</p>
        </div>

        <div className="cat-box">
          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1c09/3e7e/8b12c4c62cf5196af2cfc6977ab3dd83?Expires=1699228800&Signature=f73TUx8OWqZ-Lh8k2bWVGtZIPTaERET2WAiCSuupPBJVfU3zMaHpUuuz9vD8CY8m77RRhM~Lp7b~UIEtRkWN4VyJz73zsBv3dAFR3L0hgisTeOrSAeAfGQPCRVwOebsLjPbGQHZ-8cqh82-JdCsehMN6bbKWpUjzvQwjXtudgIMRsWNn6Q8qtz0x61yRyX6BJxR0zyoB6ZGEkFMo8tcZn9HxGTPuGc7IsVr4qxxN8e~3R7UExvcSxzPjzn7a2sMB9mQDtAPNfTSxiWUwpoFWRhnyaLLpdJJdK6dXt3-fYAyrzkLdLbs5ZD3Qsc-lDzf21Vi-rU7phtXiOtwoRMi2hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Front Brakes Pad</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 1299</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/e61a/7c51/5e7d174c286f98e8b8fa05c2819db0e5?Expires=1699228800&Signature=Icb3~sMAmmaiv9UnnyH20IYD-MFKM05zwHNzW2~cCOs~VvrLXH1bYkBEEiY61vezIC~WKJSoTAppTygdxjYdrotSSxauY3fE3oAW5dwSuaAEVbK2A0WTFUg20qLozq54ZH6WNuQP0tONmn7hh0XJOIFdyIMKBQIgZLBZpdAvEtpkOigWC3Zv7OlaM9QBHuUiAA5ppn1d6oyadgcB-6rL8aViLwP0BJhBAQHEDjfYZASxWYBxiL~M6GLjrD~csNZZ75SJC6tU9u~hSyE0euN1tOu93OiiOX3E-WiLNsxaWfGGClNsU3naAXrh5Eg7sm4np4uGOJT8aCtO9nLCtQEcQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Rear Brakes Shoes</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 2299</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="cards">
            <div>
              <p>4 hr Taken</p>
            </div>

            <div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/2ac1/1809/e077c087a9853b288203b221f050ad99?Expires=1699228800&Signature=KqjQxDVSixZ5QndnHk3ITgMMbxcrItnW9fJ8mzo~3FMI0d7AIZvJ313gIgNouzYy3FMEdbXgOSmOuAkW22rwPY2rMHfTV3Q-QFELOCudL48uoo20i1-gf78TFF~-Jcz3tLJl5FxRL722WzBxsUVFGwbwqAeMW4f4r-oKf458Oz9I-UmaI9UNkydIjKZSO1318oMKG1K0wwfS~bsxArjcVyUR8E3scqJFPJ-CfLrSMF7mZ6S6ew03mXdfQr1KFf0xfCQsIp-NfvZ~H8nzV0~XeWo-4a2NtKTjfq5X-CDNjYU3O~6VqQHEPX4GqztpAWxl6DodU68jhXby-FkjZjYt~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>

              <div>
                <p>Front Brake Discs</p>

                <div>
                  <p>• 2000 kms or 2 Month Warranty (Recommended)</p>
                  <p>• Every 6000 kms or 3 Months</p>
                </div>

                <div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Wiper Fluid Replacement
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp;&nbsp;Car Wash
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Engine Oil Replacement
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Battery Water Top Up
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      &nbsp; &nbsp;Interior Vacuuming ( Carpet & Seats )
                    </p>
                  </div>
                </div>
                <p>+ 4 more View All</p>
              </div>
            </div>

            <div>
              <p>₹ 4799</p>
              <div>
                <p>+ ADD TO CART</p>
              </div>
            </div>

            <hr />
          </div>
        </div>

        <div className="video-done mt-5 mb-5">
          <div className="title mb-4">
            <p>See How it's Done</p>
          </div>
          <div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/c625/88d2/d63425b6dd5d4aae4081f001ea73431b?Expires=1699228800&Signature=i7Ybvu1Vbie9LUsExgVA4Rb7qEe7MuNICzWPUFatYNrdGvnKprWmgx7tptV9CdBam1Vyw7Th4NbcyPXfArChawihP4GiS7I6ZG2xpPunyg2cl9ufeim-D2dGn0TfpZN1qV5kSumSDdfb-r6yOJEo~NwQEs3HqCiypp3eqEM-3vuv-MaH0147f6Br2bZJWUMefBrYQ8OI2h05RgCsEKMFOpv4m3TSXDnZbj4RCZXY63RgaWZG70qGLJlNU1AuNhSoRZDRx02R2iVJ1jRh3ACenK7bSp81P1CSCwK804whaA9r12CEyXQOB~IqY1wYvFA9d-naafLeve8oQ1gYarlgJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div>
              <p>Periodic Services</p>
              <p>360° Car Maintenance</p>
              <p>WATCH VIDEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blogs">
        <div className="title">
          <p>Related Blogs</p>
        </div>
        <div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/c999/a8ca/0339928dc3973d11025a4f65cab5a5e3?Expires=1699228800&Signature=YlkjPxickpKcaxXlm9jaTuGI7uzhmyzz4KRlC2mkK0rx-G4ISNYWIeZpvABv-UNLkb7qO1GGSq4rtZ6iou~RIAuN1e3YkdKN5VRmsj5ZK9ctBNxuBVGyJeD~le0cZio-Nj3asVOrF0wjmregaJ4H7VzxoKAVFpOJ9QLFA9Hs418eVeZuxTyRpqJdR2fo6AFcwjwVwr3ebapcvZ~ri325GFh2XTXbFvHbQi~EfAy7Yhqfy9bayz9dPyWyETa0QnR4M42nWoLn2CjaZuiGNZGfZuHmrW7WfGg1JJIGMEfRhx3Cz3WOtbi0pV3G1qKX6qRTRpAuHKMyN72mV9UxkudKrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/1f0b/d78c/e2d8727322316ca5cf9fb231c951f0af?Expires=1699228800&Signature=nyWnHRpuXQsFmWU2lUxWuQvu7qA-eHPEmPotYZ7EVq~-tFyFaNucq0VouqMBzmuzqXmepiWApeGkhPH3XIXjTFrqR735U-N1Hv062HyiVKZ0kNkLZs1Pbu1s3m0bBl6P9HQYfBertq976Su5UF713mVsOZPaEhVsV6m03V78AKK4lL9r~eZoEQHquO695lVJOmJ586RPUeJyyt0nZX340XHuJ8WTgQJUk57o2l2CLlMMr4Jxbr7v2r1FpRtKBdRzk62VJCkL4da1Hwax9e1HzbCxGgUq8aFfmiWIcf5Uyzri3lYXb2Ti1Wd0N8MuhyTff7My69jQwGDfu4M0bovKjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/46eb/e515/8db718e7c4926297f4912cd718dd0c30?Expires=1699228800&Signature=MzQML6NigPwfLS3IYxQtawWIqFsmkUa8g4HEOCGlJ3uHECvRO1tVmbpxypULHvkZ4b7hgxIn2ZM-KuboQZjRTmPs52CD9r27JVcIe-h-7vAXWdklgQ6r7Ajz7juUmQN~97ahcwiM~FieXhsBGj4wxnKAJvmHqcHlGBuuiYv9zWS1YNjHqGL9LGTdMzPnDqhmqqKhZDF60K0n194dGszhnSUgxlJ8fanKVCV2WJH1dCTDp2sM4cMuW8ubmS3YEillC30MjQwG8Xe6qYM64J-v853GBTI6cQa6WyHUTzNzvxBIAkWamsHAEWHgqGqgSQRsOjkPAFzolRwf70Xkp4CKXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="comment_section">
        <p>Recent Review & Rating on Periodic Services</p>
        <div>
          <Comments />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Category;
