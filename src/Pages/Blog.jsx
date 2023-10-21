import React from "react";
import ComponentsNav from "../Components/ComponentsNav";
import "./Blog.css";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

const Blog = () => {
  return (
    <>
      <ComponentsNav />

      <main className="article">
        <section className="block_article">
          <div className="right_article">
            <div className="title">
              <p>Today's Article</p>
            </div>

            <div className="cards_article">
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/83a9/7013/121f6f28a362e22a13d16845a9e91293?Expires=1698624000&Signature=gCiYc5xakBBqQ359vYC069oYMfVpOe0ZsVYryTaJGwjsmikIlZAfaO95A0c7R8SjprOQ4p6iE8sOyI81ZonfRFA31TBgOyBWGjMeQZEdK3ZaK77zjBB8s1D55ALDnqhhILJg~-1cGMVu3vfcIkQyl9Fd-p-T6RzeCLGO6e6IgzClY1BbZp1n4ojelo4KGVFkSqIkdS9zo9aqk2jXFtKRhoIBwnZkB5SJsy5WzxlOzcQOhOcVf1K8o4nA3CYxy~8Wd~SQEgCN3~y-DluyKYqMkykHoE5ODLKWMRYB09c2xHQH0cyP8p-M6Sat16fxizHXr-7IOGEQvuLUkKIqB3HOTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/cdf0/4497/e93bc0683e0c8631a19150cc88a94e11?Expires=1698624000&Signature=H2lnyqFFIJIjmHkynZc6BKXoKDvs7IDuWg5NyURnGYSLgW7art6A3rQmjCqiOZIgJVR8xrsPOsTv8Za4ghhkv-SL4vNzJ~QBVx5VLkfeqfHkfI-6YkzXlhVy5J~o1f7NgGdN40CTqGZ6ln2mnpuyMW4odAA70YmSrIzpLopuuVnvx89bGzy8-MgKzAY1Gdgmgj9JbqxlG-RUjrrf72LTFDDZxwa3uCwGOYLfiBN2PdCsD1cOWR4b3LcH8U2nQubtsoJERUGWFSNN872EFuNodazqFEhqFdIkNiTyt51oLz9BPFCu8V1YpHmsm0N3-6yYFO2oc66Dzh1wO~pSll4B1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/cdf0/4497/e93bc0683e0c8631a19150cc88a94e11?Expires=1698624000&Signature=H2lnyqFFIJIjmHkynZc6BKXoKDvs7IDuWg5NyURnGYSLgW7art6A3rQmjCqiOZIgJVR8xrsPOsTv8Za4ghhkv-SL4vNzJ~QBVx5VLkfeqfHkfI-6YkzXlhVy5J~o1f7NgGdN40CTqGZ6ln2mnpuyMW4odAA70YmSrIzpLopuuVnvx89bGzy8-MgKzAY1Gdgmgj9JbqxlG-RUjrrf72LTFDDZxwa3uCwGOYLfiBN2PdCsD1cOWR4b3LcH8U2nQubtsoJERUGWFSNN872EFuNodazqFEhqFdIkNiTyt51oLz9BPFCu8V1YpHmsm0N3-6yYFO2oc66Dzh1wO~pSll4B1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/fe64/4496/77dff5567ef84e2985da73e1b1b6b226?Expires=1698624000&Signature=RJ6jj~JvKKEvfnCgClzZdPwfH8zO~7Vo29R~KvxqsqFr8nxTzDYXk2zKKuCE2pQ4ctCfKf~o6ZyGv~bDwoqwY310cKiNRKqw~n1WMPsccy2~73Z9pVTWitXswlRh2V-chZg0eMqRsH11bI4aCEjFByVHzh5w7LnaKWaKmSS58u9puxCjWwp8zjzSDE8rEEeuoCD1~wDgxEdtI6pdt06GQ99qphFTVhjDJin5A770TvNOdUZhaqxlZCFKnfRY6ywwe7LOy7DJfhv9DKDhaQFziYqQxYl~8aqwtsFRK56HMPk8sb0pJYTpjAaNYIxnSvvIpt2gToc~ZenSGURlUI4HZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/5354/b932/e116d0ef456c2b70f08ade4e965d413f?Expires=1698624000&Signature=JEhcu65JoZ9mc3vco3YkwA2i9Iel~kUL5PQuQWPEXXLqmGRtkH3eyIflcqNSxXGtxxYMwBYACuigy~HXEtxGcuotH~Y7lkWHooN3RIrslyYM5vC1U-VNJ52ltW5Sxhh1STYuJI45Vmk7vCNGUj2~EtOwZAMaNMCx8c3PsUh--5ODpuBfHmrd4oKJm0AfrKMRQ1-Nd07oKqCq7AQqiOQNIhMhVKNEHB6pYzQSpucUuDw9wSJa5DtPRYlg3bNnTeNEBcpx1em71Hyrv4trfr-H610rilXGoHEasA4RrtmdUh26HuB9ltOVIzT-FGv1p5wzr7v62Zh5JfqixfZp6L3AIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/19f0/afcd/ed8d2aa811b268560bd1afff8b8eef9f?Expires=1698624000&Signature=psZRbHtqrL4WiDHEyBnAuS0N~XKGuwtqI0A74PqmEUUOitgVjimLSO-KG3P5GLxuVV1ltTrJ7CzUk29vV14TTCMedWyS898WVOxdWMKsj2Iv0VqWB8SsPnLouKpEWWz-1tqvC1e3cbuyxu8gZHf28ADPuxz0Le43tlCEdOWWfCNhCwfqUJWSm6j6pGIEYu9DcsxYs1FwZTBgftjCnl2B08CVkKvlXFYLBPBWtWlSPSXpuMM6WorlbZ~TmYeGoLvgFHgzfM9ea~GVLB7Om~DcmbzyAVcfWOBERCxvslT~b7qUguTTQ6TmGgSai2fGymYZeMwVbuNW0swd0W1OGYdkLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="title mt-5 mb-5">
              <p>Recommended</p>
            </div>

            <div className="cards_article">
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/068a/5104/d770bd5fc7bd33d37f5f268d904d792f?Expires=1698624000&Signature=fUWn0vOEK112KSYwhCtQVbF4~xuS01OCrvEhDiWkLoq6l4B2BaN7ud1dhyVvR67qOWbN0e0T4y5NWQdm-6H2DT0TWlY5hyyzkpsN~zObld3dDVlgYKeWDN1pqdoH8zYjvg-Vdcs6yIjZVjzr1uS9UzFkRxoaEGZvnwAan~~trYJUb5N-0DnBrKeAi1I4rurR4L5tvxEdPF0T~0vn5CXKEbIL1GamzZa~xChS07JVTVLAKQ6tEY9KnB2GjPOYC8j9j-OrO~r33OZko6BmCAumkqZBqD3y2COBtEGHilLDZlIvkHIRe7X1rLtkG8aw28H6mOqQFwSXRxXzs2q-xxOSfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/edc2/185d/e563dceb67c9eeef9b0cb1fa61b36cf5?Expires=1698624000&Signature=cWgxdBVvS942qWNd6IGt-~0kPWUfLpdm-ai6N3hlC0W5xVmOtil4hU4rcLlwKosNLQAN-Gs2~9CiCVaTTBrYZ323G8xpv3L7SGkc5Q5pkdp9KYsJNmPA4hGA3yPZ0kqjkhVNPFOA7JhwBcfcWvVW1mVvZ4r3lr4gZEXsuFzC6D947vQJfO6IAXwzUOXmPmF2ruW5R-F4Hyk2EyqGFMqTxDUnse3Kpe~F1a-10fbqGItOinyDDo8oWoTkceP7KbD0JY9cTf5R6VhlpKwaRvkdV9Omo2zQi0HhyghBYLmwcZQnrjy~37FXZqnm2uvyKZiCxegi3YitidRAYiko1S~ReA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/83a9/7013/121f6f28a362e22a13d16845a9e91293?Expires=1698624000&Signature=gCiYc5xakBBqQ359vYC069oYMfVpOe0ZsVYryTaJGwjsmikIlZAfaO95A0c7R8SjprOQ4p6iE8sOyI81ZonfRFA31TBgOyBWGjMeQZEdK3ZaK77zjBB8s1D55ALDnqhhILJg~-1cGMVu3vfcIkQyl9Fd-p-T6RzeCLGO6e6IgzClY1BbZp1n4ojelo4KGVFkSqIkdS9zo9aqk2jXFtKRhoIBwnZkB5SJsy5WzxlOzcQOhOcVf1K8o4nA3CYxy~8Wd~SQEgCN3~y-DluyKYqMkykHoE5ODLKWMRYB09c2xHQH0cyP8p-M6Sat16fxizHXr-7IOGEQvuLUkKIqB3HOTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/fa46/817b/d148e2320e31df4b0f10017ce417af9c?Expires=1698624000&Signature=q8Rqw77wKhjADUgjgbx~OsGFNUVxqbx-~oSlfBWY5RVrMQfizelyYPOmUkE6d2prj5uGSqNWZ4FACrp0uXge6tfVg28yFpLe7JNhDoVgPMtkZXJEP19D8-dEsB-1HLg1qY2agGRQuklSpBtn~fOVOBB~1bmOmUMuOOuOOw0j7LDePW6fybsVmDHsVofEtU1~SBXpeFz~nohQY9hmUqW5Ul~VbnZ~jISY9Tr2HZAFHFMLztIAOXKgnPSjNoj2LP7UxdRY7BreLHZ9E77wvsjTGecEQvaD5kVzD8WUUxcgsoYlQgNUZco442yqhnpfg-SGr0OGRNFT6b7qsW5lZxjp6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e5e3/5475/55448355d83d83bb6d6e50e8b2bbc70b?Expires=1698624000&Signature=HOlc4QH2bbGi4YYEVC7bndjhMnTp7NpI~muNd9kDVm-5XiBjSBTmZeQQuhBLlDFNpa-9Q1zO2f1HtdZlWmjNLoMdZLa8wHyDbO2CUeycFoVCPBo-XoJabCKhNufQC~X9TEMaYm2KvSvNF1rBqab8qSOldZp00rOEmmNqbynYI0R84UEcUOXOA73JZreLNKp1-jShp8w1hFR0-SSwqaiIp00Ku40sRK7l9qwLHqhs~t6ReozgAUOoXbtNPN9BOebkVPY4KyhvUtiUmr~MF5QGRujnpOC97sVEFJwv68mI569Y~dOA4NOeSrN1XQ5O7ZVZQbbdt99ptHVnMx6AnKJCJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/11c3/19b6/6854f87ae2e61d48a8557d3ec0e48c6a?Expires=1698624000&Signature=jrJBf0t515rxNWnw1ynEegHL9dSYhkod83G0kFVZNeFKcQvRljrQZEtBWeOs3nqWepOPjz~rRiR5grw7snkhKpBEFnfrzceKysNUdWMaHdPU891mJVrIBq4GUFMMFeLFZoK8a72wti6-2t7laBaqwu3Mg5SdFsECMMwWqidUgqfVBabKhUTNGo0r06kt4mZfd60-H9-RcQFG0Sd7q02bluT5kBEcFuiF-mFfob5DkqCShB28ypyKQl2k0n3s7FyPy2ZFzmBHXpOSFoCq1mHAl879HWdMq9ozhh0ng4Ib6uVZ23w-apQCZu4c2IPC0qQlHHRsDdi7H-pZ6aPpRSbifw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p>Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* left Side Article */}

          <div className="left_article">
            <div className="title">
              <p>Today's Article</p>
            </div>

            <div className="left_cards">
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/98bd/a86a/9fc6e38134a1048728497fcd893426ff?Expires=1698624000&Signature=Hcx-6j2-dYQcLN7a5LTWiRowbWym0KxJKjkQLnbF7Kyba7hisdOYPV2fgCkE8LFOkJdVJhWsJQbV6IW6XNXWSS8~LElCuc4UM8eI28ejiBjP2n0fWNM-bNJVZEs4HsYP~n65u9OaECM0E9pEic5kpHoPvFnBbjjAEqKrNouMuxUsgegZNLxgbjJjqGto~lMOvtXJwFWfpaBSvJkOyFbN~XXKJ4Z8Od2GjNWWqvTeSlWmMucLah8F0zgMIrCHlH10m7~9v00MdwarzVL-qGgTIeJYajBYlkCdAvyuVIGjwlsfASTSUMIjTGCzUh4YRlBmCkjid8uOMQ8e~d1litt8Ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a120/58d2/2aa202dd2171f169c44134920336377a?Expires=1698624000&Signature=GXWU8wckGZEUyvtAkqCnilxHNmFKqthlorNR1Gokt-Kc~K09mf9TImXEB3ZokjFa6EpOrXqMcR7HJ4vMWQanW1UGp9v7xutki0E0IQ8RYe6taGJ2eY8aSEHJVtjkez5D6Gtf~ohI4nzHg4iZOv69Hp6rfs6daUU2Kuzzw6btP89EerW-4zDET-H2R7uMTmbNYORXOxLfHecQyFWGUcVJmf8BCBJ0AOZx9wrPhxR3viC0ywRM2nOp8immT~sRmpSQnC4l1Ul8YT2G4M-MWPpjGuvWsp2qVwhS4YGjxbrY3qglglrwQlGxV96gGT25VisJkh1GDi~PU-yxY0tpFoaosQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/12ac/02ad/3225c1a8a65eb61802500dde16ba1ea2?Expires=1698624000&Signature=LlW1nLW26yqTJNk19MZGhryUPmSHZqULdI5hakz8~2kkIgRrXloEK4a~qLp3H7FIsKw6lF90f9H5iEi5p0cYTGsCxslF5LC~b2QjRpybWOA4Rx1TLFIkPDOzViCZcKN2z7-HgIzWNrBMyhjvS4LEaXxOD5IFkE-QEdOkkCZYP6ZyPuh8onaMoAQda1kQKvgjsvOhjXNgQO-S~nPWYM6kvBXi5JKEDkN8Cly9GGVgMxFslNkrMkENn4qFbgq7~MQmq35md6Fs1vwj3YEW2-TErLuDwItEdxCSutiHGhz-q7kNgsWiUhdOVpX4t4Lww6IWLZjvBY0X2T5KTWZttMFgJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ec75/0efa/e2e570542d3386b5ed568ca3086ee620?Expires=1698624000&Signature=excmsxoE564nbkHtHG6NTe81BwAlz1TgvKaG1OsgcpDAGbXpY~hkQmGY~j9Xjcw2shJCR1VtS9cRDTlqbcVuXiNHxypY25g2V3my4BFa35CkBqR~-Xcs3nX5KTfKV-MtZsP2UtTHM6MJA7pHyiXXeU4bLx7pM-zcIPO7adGXKUK0wv971IC5QnUoPIYjJH8k1OZ7IX4suQa8XwkHleIm6rsZqRhd-p44UKVgVPexNP2KDGSAr1xhc2KhypZ3pEimJZKPaH169rWPOpEdlhZ7-Q5SAfYWc-3N4DiThqcNwFt7crFLLYsc-OK75GDR5BfbHAvN8xeVKPKZqeivh-zsJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1f4a/1944/7ba99bf6e4f9e6b0cb1f634eeb8ce5c8?Expires=1698624000&Signature=LpvMhwpPKZsE8cpErevJO6dI19iLYkwPnsiouEN~qxiJKsQiBYXikRwU1LzCxuFgqf5g1SLTU2dvZSp7LtzNpNNqTQfLODLG3UE8JX9j5uBRpcbmLD0aJCq51EFBbfOQOxYaS~m-W0h5RZqKybYZrQv1paUg-7gjHtA5Qs8EeHvVeudpdl3aHjNPrL-lL90YwT~VleoaYNmxnno-ncz30P26iV~WANPZE-3ZBtx9jyBwmYCruILGYwq4RpxfXl~Emb7eyXM3IVWi0B-8SoImwjkJQIVq5nc0i9sWA8S3m0B7Llyss6A0pEgHJSOeU6Fxc1yPHK2asukNoSFYrekyIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8b99/8ff9/ebd9114a565f704fa0067eb4fe176e09?Expires=1698624000&Signature=kDEJc7SYgBcD5aBJXJsPv5kPhTLIJz9S~6YbR2nWNTdwVZPd3sHLg5ing-wXU7fA6epeum8NShQQVelTRYo1jcLaVRC7X2K6jlt~j3aKNCVlSyvGAAcWuvGqi5q-lv8ptgXbSC7Vuycp50EemuzCwOw0fSFnFwemSv2-zAoDgo9a7m0nVZIglcK16HUSIp51GizKKoCur-SszlV5GLu4GzEGmZbseW1tSh18JsprG3OrPzAfyAcgVzfS0omW8wZ4kY~FjJhPXHfQwDqEPXUEMMiERC8d3USdezJI-lT~QP5etjt-YaSnJFXjhgMDZgQbvb8aCNM155QZijAI1-WdUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/28fa/b763/69c50e37a7d61e8a8c9fc556dda763bd?Expires=1698624000&Signature=CQc6NygwVZ71Dq7-66yIr-WjR~HR0OvqrCFqlvej8If6Nkmtsg1SLAuUsceEZXL1Di6oA5mTj6vWg8nMvka9HxYzcG7NPFELIVCOqOnOdaDBz3bcHnfk5~t6bYhCiQmVi9ztR1vci5A5wOa-MVG4Xmu9ox6-PTBhq~7ZA8mQmYuFu15eKLnF-sT1uho81mp0-u0L7oRgsD-1PnmwLFNEh2pImj3aOAc2IDleA1smwRYlJ-d~RZRbsHBry9m5XppK1NHFLUw2peF7GksuE1J5VCqmZt1qhxWEHF62puls30Yhj5Fa4UT21nNXAaHnrEmmM2dszn~6ZaKGif9oDMoZjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/40c8/2232/ed7f98f5a2d7de3626daf028211b2dc4?Expires=1698624000&Signature=pnRtb6ChAeWT7q3~iCiFyn6NJiG9hXoQftyZDU9VulVgGM8B9MeDsOzJQRQ-ZHe4acuV8JC85rhAt3Hj5yn9VGblQ~De6vCAIKdMLffiNrkP61dIa8FkudGCA2M5pmmBUW3mc6T1NYsDmEhO7nNOXHnhAroaFV7vxHqDXdWKTUl9kRytMeteCfM6dQn~BNmCVz3nGwib5Xh5ltzLQ5-RccV5zCoIvKSGf0UrqG9dhVDXreogDch4wSDac5Y7wuFuBDYrOr87MTX-md~jxk~QLPW04nH8NucEuOOwyZ5KvDr-76Cv7jJTOqWlM65AmDoEu8go1HoG72lfSW6RGq56WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/98af/d282/9eb162f9ea1ef5f99d6fceb7fad3e7e3?Expires=1698624000&Signature=EpZdD-MlK7VuzmxOqNcCauGZcShs9SPngqxtrlacRwUssw4D8w9eFQOJCsPJjaMsN2YTJWlza5gEsrsKoQmSxfqDp-1QCN0Cuw13lX~-B24mRlWgCHj4F4nD1RkQGMorSoV7Mn1OK93W~GGWjCH4754JGwONQD1lXwHd8mgZujY8WrK1YonpyNyczkNoz12FayxWw6RdVgnQ43coTca5z4IMCv~8FsDOZKqlkb2zG6wRn~fGIA9h9xc3kaMIEjHtVFxcttDcMR6H~SQ6ZKJPtlV~7y1Vi6OG1q6Pvu7REDHSffJ5j-9RJPR~1HC9fsr3uqVyGG7kV018pjz05p4iDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f987/efb4/3d09d4158ca305a624b765601463cc04?Expires=1698624000&Signature=d3eaCqygxKtWSwI0akjpW5aaDcRI7yZ~8pYtofJW9urpKB5uGMBvT2mXU2KQVxzhJW0ZtW6jF1GVA04UB476FriMKqi4zsXTahd6SJWO2yAQUIlL6QiMZwBTJnTHP8xZOeBiD0-xHip2AprssMVuQQ9q6w2Q~m9D7fWOjW1CvHxxuRLWiOT72rXm8XWcDvCPEjuDuLLojiFoCcJg3Yzgc7~ZRbgg7yFDcvp7IPNYQ5uEbE7nJ~YsREPqVfrGg8JyctIHGdy0g9mVByfJaJA6UTWfzoit6~cRb5wp8jh33QoLqtFS0YfXgFJDdd-rrBMNJ2LCdmZWGSFMoZHwnnA9lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c625/88d2/d63425b6dd5d4aae4081f001ea73431b?Expires=1698624000&Signature=jBObPwdDATOr383BpgEInmsLxcY~VNsRPiDy9kRowh1vpav35KFHJ5z7GbYfwHkjGDHoryoBSF~brAD-seKTwDVIel-kvaGcCQlSnbWrGAbjzim3NFB1o9UVTZMMLSiBxJAiiAqoMDpmTsVtVedcEm1glblgCAT-8Rf-i7N6VLpxkJO~p~95ZfEbyC3p5LGEdLPl27HhlCB2slzocf5is4~phbvaRjP8Eb9W~zt76ucaxLN8HRes3jnUFNUIqioIj15ieT57nFUJDicQNvuHAtZjrS7i-NOpwDu8dHg3mlVMqMHHQ0k4--6eJ9PfrvElpFU2pvXCB9CyOeQcISmcRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/97bf/9c5b/fd48d90ecc01e46ea48e010d436f92da?Expires=1698624000&Signature=Uj1hFoVfLxrY3cBwbOLMFM6ouLJA-usfGUQdxOvKgL-KXXgl~DS9gGxb3CVgvzS6WHrFrqpY1nkdDIJaGrv9D2rqwxRKs8CKRfDoXDonWfD5U2esUoWnQGilrtAPQUXJg7dSIOEz4a2pb60dfM6eYNhlZum53mZ8X8NFaPMzrgAWBd~SzTopwl9OIlqwWfeUlWLGPHOqz9bOivjEiuIiPD98EgM5DZkY1aT5HgRNhyksYgbqVa7nOK1KZCfoTi2CfxeWUgcTjsZ7b6SBWYNazYAr24zfj3Y1nHcXRth3EyNed-4M2KevVWVvXIJxbC4iKX~NnxI~EYU7frI1s4JSkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9321/b995/ad15dcafb9ddfb10f294b270cd7eaefe?Expires=1698624000&Signature=ZBjGws~G4ap7tBrac6ZB2QsAKVbPo9uHBJV2ibyIG08VmNy~W357yP7Ih~INUkGEDeHpMklbdAZhnmzqJ3MdPubmO4XbQm~~rwXnntAPFFz5dqgNxbdMs7Ebm2iagwtm68BQtl22KsHlHnowR2csoVtQuOPxD7QPPiK~lAksPCwrRmeL7bSsNY1~SFZY5KG1wuobuNP8VH~nbSRh375wizOfJcKC~Ysl5HaVKxsE92ZXmoF7ZZx4mqzTHBYZ6zCIrjEuLIfXLahZC63YztNrWCmo63PutGjnzH0G2-rXx9napX6cN5oZvmHv93XbHFxtHZhqZJ7r~6EB9uyS4qnK7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9a15/5d62/590b31db5c0f78d2224f49745c16e399?Expires=1698624000&Signature=FBO-1IQTVhAtO7-CHJa56-Hx71TJkNkJy50fqsFSmpFF0wWMX78UVmaWKFBhfnw4-NanVgGZ3rG93X74~aLJULVhwZG~Oz6Txlc9fH2ofU9eu4uNX-OcredC-z3pSZogVcX4EbB1npWAmXVty-CpQfnn5hc8XQFTQqBVvNqdPiocKbB8vwo3xutZx8QKLGkTewEpzGLaRemGVFkJ09RrfuPLE1zLnCXg63j04Ej7K61VuFksP8K1SQgAAoxARGtsX56H~wTDZ6Iu57A~578UDLJYTYb~pIsaJLI70VukXrlmGsteqWnmH7eIrSNxiS4x4RsZ-EOeIHx9y0Z3cubacQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="title mb-1">Lorem Ipsum</p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Blog;
