import React from "react";
import Screenshot from "./screenshot.png";

export default function Content(props) {

  return (
    <>
      <div className="main-content">
        <h2 className="content-heading text-primary" ref={props.paragraphRef}>
          Introduction to $URANUS Token
        </h2>
        <br />
        <p ref={props.paragraphRef}>
          Welcome to the cosmic realm of $URANUS Token, where the fusion of
          memes and cryptocurrency propels us into uncharted territories of
          humor, decentralization, and financial empowerment. As denizens of the
          digital age, we understand the power of memes to transcend boundaries
          and unite people across the globe. $URANUS Token isn't just a digital
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
          connections in the digital realm. At $URANUS Token, we embrace the
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
          Our vision at $URANUS Token is as expansive as the cosmos itself. We
          envision a world where memes serve as catalysts for change, where
          humor is a universal language, and where financial opportunities are
          accessible to all. Our mission is to democratize finance, empower
          individuals, and foster a community where creativity thrives, and
          innovation knows no bounds.
        </p>
        <br />
        <p ref={props.paragraphRef}>
          Through $URANUS Token, we strive to break down barriers, challenge
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
          $URANUS distinguishes itself through a myriad of key features designed
          to enhance security, scalability, and interoperability:
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Security:
          </strong>
          Built on a robust blockchain infrastructure utilizing cutting-edge
          encryption and consensus mechanisms, $URANUS prioritizes the security
          of user assets and data. Our platform employs rigorous security
          measures to safeguard against potential threats and ensure the
          integrity of transactions within the network.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Decentralization:
          </strong>
          $URANUS operates on a decentralized network, eliminating the need for
          intermediaries and centralized control. By decentralizing authority,
          $URANUS ensures censorship resistance, immutability, and transparency,
          enabling users to transact freely and securely without the constraints
          of traditional financial systems.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Scalability:
          </strong>
          With a scalable architecture, $URANUS can accommodate a high volume of
          transactions with minimal latency, ensuring fast and efficient
          processing for users worldwide. Our platform is designed to scale
          dynamically to meet the growing demands of the digital economy,
          without compromising on performance or reliability.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Privacy:
          </strong>
          $URANUS prioritizes user privacy and anonymity, offering optional
          privacy features to protect sensitive information. Through advanced
          cryptographic techniques, users can transact with confidence, knowing
          that their financial data remains secure and confidential.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Community Governance:
          </strong>
          $URANUS operates on a community-driven governance model, empowering
          token holders to participate in decision-making processes regarding
          protocol upgrades, development initiatives, and resource allocation.
          This democratic approach ensures that the interests of the community
          are represented and respected.
          <br />
          <br />
          <strong className="text-primary" ref={props.paragraphRef}>
            Interoperability:
          </strong>
          $URANUS is interoperable with other blockchain networks and
          cryptocurrencies, facilitating seamless cross-chain transactions and
          fostering collaboration within the broader blockchain ecosystem. Our
          platform supports interoperability protocols, enabling compatibility
          with various decentralized applications and protocols.
        </p>
        <br />
        <h2 className="content-heading text-primary">Tokenomics</h2>
        <br />
        <p>
          $URANUS Tokenomics are designed to promote stability, incentivize
          holders, and drive long-term value for investors. With a total supply
          of X tokens and a deflationary mechanism in place, every transaction
          contributes to the growth and sustainability of the $URANUS ecosystem.
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
          innovation and growth in the $URANUS ecosystem. Our roadmap includes:
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
            Develop and launch new features and products to enhance the $URANUS
            experience and provide additional utility for our token.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Strategic Partnerships:
            </strong>{" "}
            Form partnerships with other projects, influencers, and
            organizations to increase visibility and adoption of $URANUS Token.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Ecosystem Expansion:
            </strong>{" "}
            Explore opportunities to expand the $URANUS ecosystem and integrate
            with other platforms and protocols.
          </li>
        </ul>
        <h2 className="content-heading text-primary">How to Buy $URANUS</h2>
        <br />
        <p>
          Purchasing $URANUS Tokens is a straightforward process, designed to be
          accessible to both experienced cryptocurrency traders and newcomers
          alike. Here's a step-by-step guide on how to buy $URANUS Tokens:
        </p>
        <br />
        <ul>
          <li>
            <strong className="text-primary text-decoration-underline">
              Set Up a Wallet:
            </strong>{" "}
            Before you can buy $URANUS Tokens, you'll need to have a
            cryptocurrency wallet that supports Binance Smart Chain (BSC)
            tokens. Popular options include MetaMask, Trust Wallet, and Binance
            Chain Wallet. Make sure to securely store your wallet's seed phrase
            and private keys.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Acquire BNB (Binance Coin):
            </strong>{" "}
            $URANUS Tokens are typically purchased using Binance Coin (BNB), the
            native cryptocurrency of the Binance Smart Chain. If you don't
            already have BNB in your wallet, you'll need to acquire some from a
            cryptocurrency exchange such as Binance or a peer-to-peer trading
            platform.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Connect to a Decentralized Exchange (DEX):
            </strong>{" "}
            $URANUS Tokens are available for trading on decentralized exchanges
            (DEXs) that support the Binance Smart Chain, such as PancakeSwap.
            Access PancakeSwap or your preferred DEX through your wallet's
            browser extension or app.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Navigate to the $URANUS Token Pair:
            </strong>{" "}
            Once you've accessed the DEX, navigate to the trading pair for
            $URANUS Tokens. This typically involves selecting the correct token
            contract address for $URANUS and pairing it with BNB.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Set Your Slippage Tolerance:
            </strong>{" "}
            Slippage refers to the difference between the expected price of a
            trade and the price at which the trade is executed. To ensure your
            transaction goes through smoothly, set an appropriate slippage
            tolerance. The recommended slippage tolerance for $URANUS Token
            transactions may vary but is typically between 5% and 12%.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Enter the Amount:
            </strong>{" "}
            Specify the amount of BNB you wish to swap for $URANUS Tokens.
            Double-check the transaction details, including the estimated price
            and the amount of $URANUS Tokens you'll receive.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Confirm the Transaction:
            </strong>{" "}
            Once you've reviewed and confirmed the transaction details, proceed
            to confirm the swap. Your wallet may prompt you to approve the
            transaction and sign it with your private key or biometric
            authentication.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Wait for Confirmation:
            </strong>{" "}
            After confirming the transaction, wait for it to be processed and
            confirmed on the blockchain. This typically takes a few moments but
            may vary depending on network congestion.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              View Your $URANUS Token Balance:
            </strong>{" "}
            Once the transaction is confirmed, you should see your $URANUS Token
            balance reflected in your wallet. You can now hold onto your tokens,
            stake them, or participate in other activities within the $URANUS
            ecosystem.
          </li>
          <br />
          <li>
            <strong className="text-primary text-decoration-underline">
              Optional:
            </strong>{" "}
            Add $URANUS Token to Your Wallet: If $URANUS Tokens don't
            automatically appear in your wallet, you may need to manually add
            them by entering the token contract address. This ensures that you
            can easily view and manage your $URANUS Tokens alongside your other
            assets.
          </li>
          <br />
        </ul>
        <h2 className="content-heading text-primary">Safety Disclaimer</h2>
        <br />
        <p>
          While $URANUS Token strives to provide a secure and transparent
          platform for our community, investing in cryptocurrencies carries
          inherent risks. Please conduct thorough research, assess your risk
          tolerance, and consult with a financial advisor before making any
          investment decisions.
        </p>
        <h2 className="content-heading text-primary">Token Utility</h2>
        <br />
        <p>
          $URANUS Token serves as the backbone of our ecosystem, enabling
          holders to participate in governance, earn rewards through staking,
          and unlock exclusive features and benefits. As our platform continues
          to evolve, so too will the utility and value of $URANUS Token, driving
          growth and innovation in the $URANUS ecosystem.
          <br />
          In conclusion, $URANUS Token isn't just another cryptocurrency; it's a
          movement, a community, and a symbol of the power of memes and
          decentralization. Join us on this cosmic journey as we redefine the
          future of memes, finance, and internet culture. Together, we'll reach
          for the stars and beyond!
        </p>
        <br />
        <h2 className="content-heading text-primary">
          Elon sues OpenAI, Apple's decline, TikTok ban, Bitcoin $100K?, Science
          corner: Microplastics
        </h2>
        <br />
        <p className="blockquote-footer">BY ALL-IN PODCAST</p>
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

      {/* <div data-referral_code="YOUR_REFERRAL_CODE" id="wx-price-chart"></div> */}
    </>
  );
}
