/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { medication_cus_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
export default function VeterinaryCompounding(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Veterinary Compoundingt</title>
        <meta
          name="description"
          content={`${props.websiteTitle} Veterinary Compounding`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Veterinary Compounding</h1>
                <h6 className="subtitle text-justify">
                  <span className="text-info text-bold">
                    Problem, Meet Solution
                  </span>
                  <br />
                  Cats are notorious for refusing to swallow pills (you probably
                  have the scratches to prove it), and they’ll usually eat right
                  around one disguised in food. Administration can be equally
                  tricky with dogs — a dose of medication that is therapeutic
                  for an 80-pound Golden Retriever could be deadly for a
                  six-pound Yorkie. Large and exotic pets, such as horses,
                  rabbits, birds, ferrets and reptiles, all pose a variety of
                  different medication challenges, too. But the solution is
                  often the same for them all: veterinary compounding.
                  <br />
                  <br />
                  <span className="text-info text-bold">In Good Taste</span>
                  <br />
                  Compounding is ideal for pets that won't take medication
                  because of the taste. Cats don't like pills, but they do like
                  tuna. Dogs aren't wild about medication being squirted into
                  their mouths, but they'll take it gladly when it's
                  meat-flavored or part of a tasty biscuit or treat. Birds can't
                  take large volumes of liquid medication, but they'll open wide
                  for a small dose of a tasty, fruit-flavored, concentrated
                  solution.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light spacer feature20 up">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">
                  Just like their owners, pets are unique. They come in all
                  shapes and sizes.
                </h1>
                <h6 className="subtitle text-justify">
                  <span className="text-info text-bold">Right-Sizing</span>
                  <br />
                  Just like their owners, pets are unique. They come in all
                  shapes and sizes, and may be sensitive to ingredients like
                  lactose. It makes sense that commercially available medicines
                  aren't always appropriate for each and every pet. But with
                  compounding, your veterinarian can prescribe a treat, liquid
                  or other dosage form with the exact ingredients, flavor and
                  dose that's right for your pet.
                  <br />
                  <br />
                  <span className="text-info text-bold">To Be Continued</span>
                  <br />
                  Sometimes, manufacturers discontinue a veterinary medication
                  because there’s not enough demand to make mass production cost
                  effective. But that does not mean there aren’t still pets that
                  need it. When a medication that has worked well for your pet
                  isn’t commercially available, a compounding pharmacist can
                  prepare a prescription and tailor the strength, dosage form,
                  and flavor to meet your pet’s specific needs.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
