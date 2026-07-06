import { useApp } from '../../context/AppContext';
import { useLanguage } from '../../context/LanguageContext';
import './NodeNarration.css';

function NodeNarration({ node, character, flags, resolvedText, onNext, credits, language }) {
  const { navigateTo } = useApp();
  const { t } = useLanguage();

  return (
    <div className="node-narration">
      <p className="node-text">{resolvedText}</p>
      {node.next !== null && (
        <button className="node-btn" onClick={onNext}>
          {t('game.continueLabel')}
        </button>
      )}
      {node.next === null && (
        <div className="node-end">
          <p className="node-end-label">{t('game.endLabel')}</p>

          {credits && (
            <div className="node-credits">
              <p>{t('game.creditsAuthor')} {credits.author}</p>
              {credits.translators?.ru && (
                <p>
                  {t('game.creditsTranslator')}{' '}
                  {language === 'ru' ? 'Дарья Косыхина' : credits.translators.ru}
                </p>
              )}
            </div>
          )}

          <button className="node-btn" onClick={() => navigateTo('mainMenu')}>
            {t('game.backToMenu')}
          </button>
        </div>
      )}
    </div>
  );
}

export default NodeNarration;