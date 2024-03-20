import React from "react";
import Screenshot from "./screenshot.png";

export default function Content(props) {

  return (
    <>
      <div style={{display: props.display === "block" ? "block" : "none"}} className="main-content">
        <h2 className="content-heading text-primary" ref={props.paragraphRef}>
          Introduction to URANUS Token
        </h2>
        <br />
        <p ref={props.paragraphRef}>
          Welcome to the cosmic realm of URANUS Token, where the fusion of
          memes and cryptocurrency propels us into uncharted territories of
          humor, decentralization, and financial empowerment. As denizens of the
          digital age, we understand the power of memes to transcend boundaries
          and unite people across the globe. URANUS Token isn't just a digital
          currency; it's a symbol of the boundless potential of internet culture
          and the decentralized revolution.
        </p>
        <br />
        <img className="screenshot" src={Screenshot} />
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="500"
          height="400"
          src="https://www.dextools.io/widget-chart/en/solana/pe-light/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
        ></iframe>
        <br />
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gI7qfHuLQ6Q?si=vCwS1QoZS7-MOZvH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-KJZCYW_pN8?si=ziBzh2S1D3SB5ZlW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <p ref={props.paragraphRef}>
          Memes have evolved from mere internet novelties to powerful cultural
          symbols, shaping discourse, sparking movements, and forging
          connections in the digital realm. At URANUS Token, we embrace the
          transformative power of memes, harnessing their viral nature to create
          a platform where creativity, community, and finance intersect. We
          invite meme enthusiasts, crypto aficionados, and visionaries alike to
          join us on this cosmic journey as we redefine the future of memes and
          finance.
        </p>
        <br />
        <div
          className="coinmarketcap-currency-widget"
          data-currencyid="29231"
          data-base="USD"
          data-secondary=""
          data-ticker="true"
          data-rank="false"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
        <br />
        <h2 className="content-heading text-primary" ref={props.paragraphRef}>
          Vision and Mission
        </h2>
        <br />
        <p ref={props.paragraphRef}>
          Our vision at URANUS Token is as expansive as the cosmos itself. We
          envision a world where memes serve as catalysts for change, where
          humor is a universal language, and where financial opportunities are
          accessible to all. Our mission is to democratize finance, empower
          individuals, and foster a community where creativity thrives, and
          innovation knows no bounds.
        </p>
        <br />
        <p ref={props.paragraphRef}>
          Through URANUS Token, we strive to break down barriers, challenge
          traditional financial systems, and create a space where anyone can
          participate in the digital economy. By harnessing the collective power
          of our community, we aim to rewrite the rules of finance and pave the
          way for a more inclusive and equitable future.
        </p>
        <h2 className="content-heading text-primary" ref={props.paragraphRef}>
          Key Features
        </h2>
        <br />
        <p ref={props.paragraphRef}>
          URANUS distinguishes itself through a myriad of key features designed
          to enhance security, scalability, and interoperability:
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Security:
          </strong>
          Built on a robust blockchain infrastructure utilizing cutting-edge
          encryption and consensus mechanisms, URANUS prioritizes the security
          of user assets and data. Our platform employs rigorous security
          measures to safeguard against potential threats and ensure the
          integrity of transactions within the network.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Decentralization:
          </strong>
          URANUS operates on a decentralized network, eliminating the need for
          intermediaries and centralized control. By decentralizing authority,
          URANUS ensures censorship resistance, immutability, and transparency,
          enabling users to transact freely and securely without the constraints
          of traditional financial systems.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Scalability:
          </strong>
          With a scalable architecture, URANUS can accommodate a high volume of
          transactions with minimal latency, ensuring fast and efficient
          processing for users worldwide. Our platform is designed to scale
          dynamically to meet the growing demands of the digital economy,
          without compromising on performance or reliability.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Privacy:
          </strong>
          URANUS prioritizes user privacy and anonymity, offering optional
          privacy features to protect sensitive information. Through advanced
          cryptographic techniques, users can transact with confidence, knowing
          that their financial data remains secure and confidential.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Community Governance:
          </strong>
          URANUS operates on a community-driven governance model, empowering
          token holders to participate in decision-making processes regarding
          protocol upgrades, development initiatives, and resource allocation.
          This democratic approach ensures that the interests of the community
          are represented and respected.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Interoperability:
          </strong>
          URANUS is interoperable with other blockchain networks and
          cryptocurrencies, facilitating seamless cross-chain transactions and
          fostering collaboration within the broader blockchain ecosystem. Our
          platform supports interoperability protocols, enabling compatibility
          with various decentralized applications and protocols.
        </p>
        <br />
        <h2 className="content-heading text-primary">Tokenomics</h2>
        <br />
        <p>
          URANUS Tokenomics are designed to promote stability, incentivize
          holders, and drive long-term value for investors. With a total supply
          of X tokens and a deflationary mechanism in place, every transaction
          contributes to the growth and sustainability of the URANUS ecosystem.
          <br />
          The tokenomics include:
          <br />
          <br />
          <ul>
            <li>
              <strong className="text-primary text-decoration-underline">
                Total Supply:
              </strong>{" "}
              X tokens
            </li>
            <br />
            <li>
              <strong className="text-primary text-decoration-underline">
                Initial Distribution:
              </strong>{" "}
              Initial distribution plan
            </li>
            <br />
            <li>
              <strong className="text-primary text-decoration-underline">
                Deflationary Mechanism:
              </strong>{" "}
              Details of token burning or redistribution mechanisms
            </li>
            <br />
            <li>
              <strong className="text-primary text-decoration-underline">
                Token Allocation:
              </strong>{" "}
              Allocation for liquidity, community rewards, development, and
              marketing
            </li>
          </ul>
        </p>
        <h2 className="content-heading text-primary">Roadmap</h2>
        <br />
        <p>
          Our roadmap outlines our vision for the future and the key milestones
          we aim to achieve along the way. From expanding our community to
          launching new features and partnerships, we're committed to driving
          innovation and growth in the URANUS ecosystem. Our roadmap includes:
        </p>
        <br />
        <ul>
          <li>
            <strong className="text-primary text-decoration-underline">
              Community Growth:
            </strong>{" "}
            Expand our community through marketing efforts, partnerships, and
            community engagement initiatives.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Platform Development:
            </strong>{" "}
            Develop and launch new features and products to enhance the URANUS
            experience and provide additional utility for our token.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Strategic Partnerships:
            </strong>{" "}
            Form partnerships with other projects, influencers, and
            organizations to increase visibility and adoption of URANUS Token.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Ecosystem Expansion:
            </strong>{" "}
            Explore opportunities to expand the URANUS ecosystem and integrate
            with other platforms and protocols.
          </li>
        </ul>
        <h2 className="content-heading text-primary">How to Buy URANUS</h2>
        <br />
        <p>
          Purchasing URANUS Tokens is a straightforward process, designed to be
          accessible to both experienced cryptocurrency traders and newcomers
          alike. Here's a step-by-step guide on how to buy URANUS Tokens:
        </p>
        <br />
        <ul>
          <li>
            <strong className="text-primary text-decoration-underline">
            Research and Understanding:
            </strong>{" "}
            Begin by immersing yourself in thorough research about URANUS (Uranus Meme Token). Delve into its purpose, community engagement, and the associated risks that come with investing in meme tokens. Understanding these facets will empower you to make informed decisions.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Select a Reliable Exchange:
            </strong>{" "}
            Opt for a reputable cryptocurrency exchange that supports URANUS trading pairs. Prioritize platforms known for their robust security measures and user-friendly interfaces, ensuring a smooth and secure transaction experience.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Create an Account:
            </strong>{" "}
            Take the necessary steps to create an account on your chosen exchange. This typically involves completing verification procedures, including identity authentication, to comply with regulatory standards and gain access to trading functionalities.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Deposit Funds:
            </strong>{" "}
            Once your account is set up, proceed to deposit funds into it. Utilize supported deposit methods such as bank transfers, credit/debit cards, or other cryptocurrencies to ensure you have the necessary balance for purchasing URANUS.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Find URANUS Pair:
            </strong>{" "}
            Navigate through the exchange's trading section to locate URANUS trading pairs. These are commonly denoted as URANUS/USDT or URANUS/BTC, simplifying the process of finding and trading URANUS.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Place Order:
            </strong>{" "}
            Determine the type of order you wish to place based on your preferences and market conditions. You can opt for a market order, which executes immediately at the current market price, or a limit order, where you set a specific price for execution.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Review Order:
            </strong>{" "}
            Before finalizing your order, meticulously review all the details to ensure accuracy. Verify the quantity of URANUS you're purchasing and double-check the purchase price to avoid any discrepancies.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Execute Trade:
            </strong>{" "}
            Once you're satisfied with the order details, proceed to execute the trade. Your order will be processed swiftly, and you'll soon acquire URANUS tokens, which will reflect in your exchange wallet.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Secure Your Tokens:
            </strong>{" "}
            Enhance the security of your URANUS holdings by transferring them to a secure wallet post-purchase. Consider utilizing hardware wallets or reputable software wallets to safeguard your assets against potential risks.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
            Stay Informed and Monitor:
            </strong>{" "}
            Stay abreast of the latest developments and trends related to URANUS and the broader cryptocurrency market. Regularly monitor your investment to stay informed and be prepared to adjust your strategies accordingly for optimal outcomes.
          </li>
          <br />
        </ul>
        <h2 className="content-heading text-primary">Safety Disclaimer</h2>
        <br />
        <p>
          While URANUS Token strives to provide a secure and transparent
          platform for our community, investing in cryptocurrencies carries
          inherent risks. Please conduct thorough research, assess your risk
          tolerance, and consult with a financial advisor before making any
          investment decisions.
        </p>
        <h2 className="content-heading text-primary">Token Utility</h2>
        <br />
        <p>
          URANUS Token serves as the backbone of our ecosystem, enabling
          holders to participate in governance, earn rewards through staking,
          and unlock exclusive features and benefits. As our platform continues
          to evolve, so too will the utility and value of URANUS Token, driving
          growth and innovation in the URANUS ecosystem.
          <br />
          In conclusion, URANUS Token isn't just another cryptocurrency; it's a
          movement, a community, and a symbol of the power of memes and
          decentralization. Join us on this cosmic journey as we redefine the
          future of memes, finance, and internet culture. Together, we'll reach
          for the stars and beyond!
        </p>
        <br />
        <h2 className="content-heading text-primary">
        All In On Uranus 
        </h2>
        <br />
        <p className="blockquote-footer text-center">BY ALL-IN PODCAST</p>
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/snbTCWL6rxo?si=8nV2Sgb3RZ85XDBi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <br />
      </div>
      <div
        id="coinmarketcap-widget-coin-price-block"
        coins="1,1027,825,29231"
        currency="USD"
        theme="dark"
        transparent="true"
        show-symbol-logo="true"
      ></div>
    </>
  );
}
