import { Text } from "@theme-ui/components";

import "./Cities.css";

function Cities() {
  return (
    <div className="cities">
      <Text
        sx={{
          fontSize: 4,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Capitais
      </Text>

      <div className="cities-block-holder">
        <div className="citie-block-one">
          <div className="cities-subtitles">
            <p>Min</p>
            <p>Máx</p>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>18º</p>
              <p>27º</p>
            </div>
            <div className="cities-name-holder">
              <p>Rio de Janeiro</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>14º</p>
              <p>22º</p>
            </div>
            <div className="cities-name-holder">
              <p>São Paulo</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>21º</p>
              <p>32º</p>
            </div>
            <div className="cities-name-holder">
              <p>Belo Horizonte</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>24º</p>
              <p>37º</p>
            </div>
            <div className="cities-name-holder">
              <p>Brasília</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>24º</p>
              <p>37º</p>
            </div>
            <div className="cities-name-holder">
              <p>Belém</p>
            </div>
          </div>
        </div>
        <div className="citie-block-two">
          <div className="cities-subtitles">
            <p>Min</p>
            <p>Máx</p>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>18º</p>
              <p>27º</p>
            </div>
            <div className="cities-name-holder">
              <p>Rio de Janeiro</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>14º</p>
              <p>22º</p>
            </div>
            <div className="cities-name-holder">
              <p>São Paulo</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>21º</p>
              <p>32º</p>
            </div>
            <div className="cities-name-holder">
              <p>Belo Horizonte</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>24º</p>
              <p>37º</p>
            </div>
            <div className="cities-name-holder">
              <p>Brasília</p>
            </div>
          </div>
          <div className="cities-citie-holder">
            <div className="cities-temp-holder">
              <p>24º</p>
              <p>37º</p>
            </div>
            <div className="cities-name-holder">
              <p>Belém</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
