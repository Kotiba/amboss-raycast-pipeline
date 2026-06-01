# Statistical analysis of data

*Categories: Clinical knowledge > Epidemiology and biostatistics > Statistical analysis of data*

[Original Article Link](/library/nn07Fg)

---

## Summary

<u>Statistical analysis</u> is one of the principal tools employed in <u>epidemiology</u>, which is primarily concerned with the study of health and disease in populations and its clinical applications. <u>Statistics</u> is the science of collecting, analyzing, and interpreting data, and a good epidemiological study depends on statistical methods being employed correctly. At the same time, flaws in <u>study design</u> can affect <u>statistics</u> and lead to incorrect conclusions. <u>Descriptive statistics</u> measure, describe, and summarize features of a collection of data/sample without making inferences that go beyond the scope of that collection/sample. Common measures of <u>descriptive statistics</u> are those of <u>central tendency</u> and dispersion. <u>Measures of central tendency</u> describe the central distribution of data and include the mode, median, and mean. <u>Measures of dispersion</u> describe how data is distributed and include range, quartiles, <u>variance</u>, and deviation. The counterpart of <u>descriptive statistics</u>, <u>inferential statistics</u>, relies on data to make inferences that do go beyond the scope of the data collected and the sample from which it was obtained. <u>Inferential statistics</u> involves parameters such as <u>sensitivity</u>, <u>specificity</u>, positive/<u>negative predictive values</u>, <u>confidence intervals</u>, and <u>hypothesis testing</u>.




The values used to describe features of a sample or data set are called variables. Variables can be independent, in the sense that they are not dependent on other variables and can thus be manipulated by the researcher for the purpose of a study (e.g., administration of a certain drug), or dependent, in the sense that their value depends on another variable and, thus, cannot be manipulated by the researcher (e.g., a condition caused by a certain drug). Variables can furthermore be categorized qualitatively in categorical terms (e.g., <u>eye</u> color, sex, race) and quantitatively in numerical terms (e.g., age, weight, temperature).




<u>Statistical analysis</u> is used in all <u>types of epidemiological studies</u>, including the <u>evaluation of diagnostic tests</u> before approval for clinical practice. These rely on <u>inferential statistics</u> to draw conclusions from sample groups that can be applied to the general population.




See also “<u>Epidemiology</u>,” “<u>Interpreting medical evidence</u>,” and “<u>Population health</u>.”




![Medical Statistics - Part 1: Calculating Percentages](media/small_5dfa17f60b67a.jpg)

Medical Statistics - Part 1: Calculating Percentages

![Medical Statistics - Part 2: Calculating Relative Risk](media/small_5dfa17fbcac0d.jpg)

Medical Statistics - Part 2: Calculating Relative Risk

![Medical Statistics - Part 9: The Null Hypothesis](media/small_607436fc02d69.jpg)

Medical Statistics - Part 9: The Null Hypothesis

![Medical Statistics - Part 10: Type 1 and Type 2 Errors](media/small_60e31cdd6c156.jpg)

Medical Statistics - Part 10: Type 1 and Type 2 Errors

![Medical Statistics - Part 11: The p-value](media/small_611e0b2d9dec3.jpg)

Medical Statistics - Part 11: The p-value

---

## Measures of central tendency and outliers

### Measures of central tendency




* Definition: measures to describe a common, typical value of a data set (e.g., <u>clustering</u> of data at a specific value)

* Approach: The type of measure used depends on the sample size.





| <u>Measures of central tendency</u> |  |  |
| --- | --- | --- |
| Measure | Definition | Example |
| Mean (statistics) | <br><br>* The arithmetic average of the data set<br><br>* Limitations: affected by extreme values (<u>outliers</u>)<br><br><br> | <br>* The sum of all the data divided by the number of values in the data set. (e.g., consider a data set of 3, 6, 11, 14, 16, 19. The <u>mean value</u> is 11.5 (= 69/6).<br><br> |
| Median (statistics) | <br><br>* The middle value of the data set that has been arranged in order of magnitude; it divides the upper half of the data set from the lower half<br><br>* Not strongly affected by <u>outliers</u> or skewed data<br><br><br> | <br><br>* Uneven number of values: 3, 6, 11, 16, 19. The <u>median value</u> is the middle value = 11.<br><br>* Even number of values: 2, 3, 5, 7, 9, 10. The <u>median value</u> is the average of the two middle values = (5+7)/2 = 6.<br><br><br> |
| Mode (statistics) | <br><br>* The most common value in a data set<br><br>* Most resistant against <u>outliers</u><br><br>* Can be used to describe <u>qualitative data</u>.<br><br><br> | <br>* In a data set with the values “3, 6, 6, 11, 11, 11, 2, 2,” the mode = 11.<br><br> |





![Distribution of data](media/lctm8so8q7aj4zvg7g9o3nwe.jpg)

Distribution of data




### Outlier




* Definition: a data point/observation that is distant from other data points/observations in a data set

* Problem

* It is important to identify <u>outliers</u>, because <u>outliers</u> can indicate errors in measurement or statistical anomalies.

* The mean is easily influenced by <u>outliers</u>

* Approach

* Using a trimmed mean: calculate the mean by discarding extreme values in a data set and using the remaining values

* Use the median or mode: useful for asymmetrical data; these measures are not affected by extreme values because they are based on ranks of data (median) or the most commonly occurring value (mode) rather than the average score of all values

* Removing <u>outliers</u> can also distort the interpretation of data. It should be done with caution and with a view to reflecting the respective data set.

* Regression to mean: a phenomenon in which any measurement taken after the measurement of a random variable lying at the extreme (i.e., above or below the mean) is likely to be closer to the mean

---

## Measures of dispersion

### Overview




* <u>Measures of dispersion</u> are statistical measures that describe the variability or spread of data to determine the degree of its homogeneity or heterogeneity. 
* For example, two companies with 10 employees each pay the same mean salary of $50,000, but company A has a range of $10,000–$400,000 while company B has a range of $40,000–$60,000. In company A, one employee would be earning $400,000 and another $10,000, with the remaining 8 earning a mean of $11,250. Despite paying the same mean salary, the average employee of company B has a higher salary.

* Some <u>measures of dispersion</u> relate to <u>sample distribution</u>, while others relate to <u>sampling distribution</u>. [[1]](/library/lYWv6P0)

* Sample distribution

* Definition: distribution of the observed parameters in a given sample

* Examples: <u>variance</u>, <u>standard deviation</u>

* Sampling distribution

* Definition: distribution of descriptive statistical parameters (e.g., means) of different samples

* Examples: <u>standard error of the mean</u>, <u>confidence interval</u>





| <u>Measures of dispersion</u> |  |  |
| --- | --- | --- |
| Measure | Definition | Explanation |
| Range (statistics) | <br><br>* The difference between the largest and smallest value in a data set<br><br>* Sensitive to extreme data values<br><br>* Helps to identify an unusually wide or narrow data range, which may occur with data entry errors (e.g., data that actually belongs to another study population)<br><br><br> | <br>* In the data set “3, 4, 9, 27,” the range is 24 (i.e., 27-3).<br><br> |
| Interquartile range | <br><br>* The range from the second to the third quartile.<br><br>* Calculated by establishing the difference between the 75<sup>th</sup> and 25<sup>th</sup><u>percentile</u><br><br>* Less influenced by extreme data values (<u>outliers</u>)<br><br><br> | <br>* Calculated as the difference between the 75<sup>th</sup> and 25<sup>th</sup> <u>percentile</u><br><br> |
| Quartile | <br>* One quarter of a data set<br><br> | <br>* Each quartile includes 25% of the population data set.<br><br>* First quartile (lower quartile): 25% of all values are smaller than this value.<br><br>* Third quartile (upper quartile): 75% of all values are smaller than this value.<br><br> |
| Percentile | <br>* A value on a scale from 1 to 100 indicating the percentage of a distribution equal to or below that value<br><br> | <br><br>* Growth charts feature length-for-age and <u>weight-for-age</u> <u>percentiles</u> to help evaluate a child's development in relation to other children their age.<br><br>* If a child's weight is in the 25<sup>th</sup> <u>percentile</u> for his or her age, this child weighs more than 25% of children of the same age group, but less than 75% children of the same age group. For example:<br><br>* 3<sup>rd</sup> <u>percentile</u> (= 3/100-quantile):3% of all values are smaller than this value.<br><br>* 50<sup>th</sup> <u>percentile</u> (= 50/100-quartile): 50% of all values are smaller than this value (median).<br><br>* 97<sup>th</sup> <u>percentile</u> (= 97/100-quartile): 97% of all values are smaller than this value.<br><br>* Upper limit of normal (<u>ULN</u>): a value at the upper extreme of the <u>reference range</u> (95<sup>th</sup> <u>percentile</u>) of the target population<br><br>* Lower limit of normal (<u>LLN</u>): a value at the lower extreme of the <u>reference range</u> (5<sup>th</sup> <u>percentile</u>) of the target population<br><br><br> |
| Variance (statistics) | <br><br>* The average of the squared deviations from the mean<br><br>* Represented by σ<sup>2</sup> (<u>S<sup>2</sup></u>)<br><br><br> | <br><br>* σ<sup>2</sup> = the sum of squared deviations from the mean divided by total number of observations<br><br>* Calculated by subtracting the mean from each population data set value. Each difference is then squared and added together. Finally, the total sum is divided by n-1.<br><br><br> |
| <br>Standard deviation (SD) | <br><br>* The square root of the <u>variance</u><br><br>* Describes the variability or dispersion of data in relation to its mean<br><br>* Represented by σ (sigma; population <u>standard deviation</u>) or s (sample <u>standard deviation</u>)<br><br><br> | <br><br>* The <u>standard deviation</u> is calculated by first calculating the mean. The mean is subtracted from each population data set value. Each difference is squared and added together. The total sum is divided by the total number of data set values -1. The square root of this value is the <u>standard deviation</u> (σ or s).<br><br>* In a <u>normal distribution</u>  <br><br>* 1 SD = 68% of the data set<br><br>* 2 SD = 95% of the data set<br><br>* 3 SD = 99.7% of the data set<br><br><br> |
| <br>Standard error of the mean (<u>SEM</u>) | <br><br>* The deviation of the sample mean from the population mean  [[1]](/library/lYWv6P0)<br><br>* Influenced by the <u>standard deviation</u> (e.g., a greater SD increases the error) and the sample size (a smaller sample size will increase the error)<br><br><br> | <br><br>* True <u>SEM</u> = σ/√(population size)  [[2]](/library/OYWI6P0)<br><br>* Estimated <u>SEM</u> = s/√(sample size)<br><br><br> |





![Bell curve and standard deviations](media/m62zr3vzy89bb1gbr14ung1e.jpg)

Bell curve and standard deviations

---

## Variables

* Definition

* Variables: measured values of population attributes or a value subject to change

* General population: the group from which the units of observation are drawn (e.g., all the patients in a hospital)

* Unit of observation: the individual who is the subject of the study (e.g, inhabitant of a region, a patient)

* Attribute: a character of the unit of observation (e.g., <u>gender</u>, patient satisfaction)

* Attribute value

* Variables can be qualitative (e.g., male/female) or quantitative (e.g., temperature: 10°C, 20°C) in nature

* Quantitative variables can be discrete or nondiscrete (continuous) variables (see “<u>Probability</u>” below).

* Types of variables

* Independent variable: a variable that is not dependent on other variables and can thus be manipulated by the researcher for the purpose of a study

* Dependent variable: a variable with a value that depends on another variable and therefore cannot be manipulated by the researcher

* Types of quantitative variables

* Discrete variable: variables that can only assume whole number values

* Continuous variable (nondiscrete variable): variables that can assume any real number value

* Categorical variable (<u>nominal variable</u>): variables that have a finite number of categories that may not have an intrinsic logical order

* Variable scales

* Definition: types of measurement scales (categorized as categorical scales and metric scales)

* Categorical scale (qualitative)

* The distance (interval) between two categories is undefined.

* Includes the <u>nominal scale</u> and <u>ordinal scale</u>

* Metric scale (quantitative)

* The distance between two categories is defined and the data can be ranked .

* Includes the <u>interval scale</u> and <u>ratio scale</u>





| <br>Types of scales [[3]](/library/tjYXX6)[[4]](/library/FjYgX6)<br> |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Types | Characteristics | <u>Measure of central tendency</u> | <u>Measure of dispersion</u> | Statistical analysis | <u>Data illustration</u> |
| Nominal scale | <br>* Data cannot be ranked<br><br> | <br><br>* Mode<br><br>* Absolute and relative frequency<br><br><br> | <br>* Not applicable<br><br> | <br>* <u>Nonparametric tests</u> (e.g., Mann-Whitney test)<br><br> | <br><br>* <u>Pie chart</u><br><br>* <u>Bar graph</u><br><br><br> |
| Ordinal scale | <br>* Data can be ranked<br><br> | <br><br>* Median<br><br>* Upper and lower quartiles<br><br>* <u>Percentiles</u><br><br><br> | <br><br>* Range<br><br>* <u>Interquartile range</u><br><br><br> | <br><br>* <u>Pie chart</u><br><br>* <u>Bar graph</u><br><br>* <u>Box plot</u><br><br><br> |  |
| Interval scale | <br>* There is no natural zero point.<br><br> | <br><br>* Minimum/maximum values<br><br>* Median<br><br>* Upper and lower quartiles<br><br>* <u>Percentiles</u><br><br>* <u>Mean value</u><br><br><br> | <br><br>* Range<br><br>* <u>Interquartile range</u><br><br>* <u>Standard deviation</u><br><br>* <u>Variance</u><br><br><br> | <br>* <u>Parametric tests</u> (e.g., <u>T-test</u>)<br><br> | <br><br>* <u>Pie chart</u><br><br>* <u>Bar graph</u><br><br>* <u>Box plot</u><br><br>* <u>Histogram</u><br><br>* <u>Scatter plot</u><br><br><br> |
| Ratio scale | <br>* There is a natural zero point.<br><br> |  |  |  |  |





![Medical Statistics - Part 1: Calculating Percentages](media/small_5dfa17f60b67a.jpg)

Medical Statistics - Part 1: Calculating Percentages

---

## Distribution and graphical representation of data

### Normal distribution (<u>Bell curve</u>, <u>Gaussian distribution</u>)  [[5]](/library/vQXABB)




* Normal distributions differ according to their mean and <u>variance</u>, but share the following characteristics:

* The same basic shape

* Unimodal distribution (i.e., one peak)

* Asymptotic to the x-axis

* Symmetry (i.e., a symmetrical <u>bell curve</u>)

* The following assumptions about the data distribution can be made:

* Due to its symmetry, half of the values lie below the mean, and the other half lie above it.

* 68% of the data falls within 1 SD of the mean.

* 95% of the data falls within 2 SD of the mean.

* 99.7% of the data falls within 3 SD of the mean.

* Total area under the curve = 1

* All <u>measures of central tendency</u> are equal (mean = median = mode)

* Standard normal distribution (<u>Z distribution</u>): a <u>normal distribution</u> with a mean of 0 and standard deviation of 1





![Bell curve and standard deviations](media/m62zr3vzy89bb1gbr14ung1e.jpg)

Bell curve and standard deviations




### Nonnormal distributions




| Types of nonnormal distributions |  |  |
| --- | --- | --- |
|  | Description | Meaning |
| Bimodal distribution | <br>* The data set has two peaks (peak = <u>modal value</u>).<br><br> | <br>* Two subgroups within the study population (e.g., the <u>incidence rate</u> of <u>Hodgkin's lymphoma</u> that has the first peak at 25–30 years and the second peak at 50–70 years)<br><br> |
| <br>Positively skewed distribution (right-skewed distribution)<br> | <br><br>* The data set has a peak on the left side and a long tail on the right (positive direction).<br><br>* The mean falls closer to the right tail.<br><br><br> | <br>* Mean > median > mode<br><br> |
| <br>Negatively skewed distribution (left-skewed distribution) | <br><br>* The data set has a peak on the right side and a long tail on the left (negative direction).<br><br>* The mean falls closer to the left tail.<br><br><br> | <br>* Mean < median < mode<br><br> |





![Distribution of data](media/lctm8so8q7aj4zvg7g9o3nwe.jpg)

Distribution of data




### Standard normal value (<u>Z-score</u>, <u>Z-value</u>, standard normalized score)



* Enables the comparison of populations with different means and <u>standard deviations</u>

* Standard normal value = (value - population mean) divided by <u>standard deviation</u>

* A means of expressing data scores (e.g., height in centimeters or meters) in the same metric (specifically, in terms of units of <u>standard deviation</u> for the population)

* Determines how many <u>standard deviations</u> an observation is above or below the mean




### Recommended measures




| Recommended measures according to distribution |  |  |
| --- | --- | --- |
| Distribution | <u>Measures of central tendency</u> | Measure of spread |
| Normal (symmetrical) | <br><br>* Mean<br><br>* Median<br><br>* Mode<br><br><br> | <br>* <u>Standard deviation</u><br><br> |
| Skewed (asymmetrical) | <br>* Median<br><br> | <br>* Range or <u>interquartile range</u><br><br> |





### Data illustration




#### Categorical data




* Frequency table 

* Presents data values for each category in a table

* Illustrates which values in a data set appear frequently

* Pie chart 

* Describes the frequency of categories in a circular graph divided into slices, with each slice representing a categorical <u>proportion</u>

* Useful for depicting a small number of categories and large differences between them

* Bar graph 

* Describes the frequency of categories in bars separated from each other (the height/length of each bar represents a categorical <u>proportion</u>)

* Useful for depicting many categories of information (compared to a <u>pie chart</u>)

* Frequency can be expressed in absolute or relative terms.





![Frequency table](media/cf34tbjebqf56cskbnsm54pc.jpg)

Frequency table

![Pie chart](media/ztmxa073ai386kgg16rnjpi9.jpg)

Pie chart

![Bar graph](media/gtorf6biqacm0q9dqfqrvnd6.jpg)

Bar graph




#### Continuous data




* Histogram 

* A <u>histogram</u> is similar to a <u>bar graph</u> but displays data on a <u>metric scale</u>.

* The data is grouped into intervals that are plotted on the x-axis.

* Useful for depicting continuous data

* Similar to a <u>bar chart</u>, but differs in the following ways:

* Used for continuous data

* The bars can be shown touching each other to illustrate continuous data.

* Bars cannot be reordered.

* Box plot 

* Quartiles and median are used to display numerical data in the form of a box.

* Useful for depicting continuous data

* Shows the following important characteristics of data:

* Minimum and maximum values

* First and third quartiles

* <u>Interquartile range</u>

* Median

* Easily shows <u>measures of central tendency</u>, range, symmetry, and <u>outliers</u> at a glance

* Scatter plot 

* A graph used to display values for (typically) two variables of data, plotted on the horizontal (x-axis) and vertical (y-axis) axes using cartesian coordinates, which represent individual data values

* Helps to establish correlations between dependent and <u>independent variables</u>

* Helps to determine whether a relationship between data sets is linear or nonlinear





![Histogram](media/fbxie6i04n749b5g0ruuvd5h.jpg)

Histogram

![Box plots](media/q0p2bnue2xlb6ugaz2hituyx.jpg)

Box plots

![Scatterplot](media/iux0nrcqftwf3jikuro9qml5.jpg)

Scatterplot

---

## Hypothesis testing and probability

### Hypothesis testing




#### Types of hypothesis




Two mutually exclusive hypotheses (<u>null hypothesis</u> and <u>alternative hypothesis</u>) are formulated.




* Null hypothesis (H<sub>0</sub>): The assumption that there is no <u>statistically significant</u> relationship between two measured variables (e.g., the exposure and the outcome) or no significant difference between two studied populations. Statistical tests are used to either reject or accept this hypothesis.
* Null value

* A number that corresponds to the <u>null hypothesis</u>

* The <u>null value</u> is 1 for <u>ratios</u> (e.g., <u>relative risk</u>, <u>odds ratio</u>) and 0 for differences (e.g., <u>attributable risk</u>, <u>absolute risk reduction</u>).

* Alternative hypothesis (H<sub>1</sub>): : The assumption that there is a relationship between two measured variables (e.g., the exposure and the outcome) or a significant difference between two studied populations. This hypothesis is formulated as a counterpart to the <u>null hypothesis</u>. Statistical tests are used to either reject or accept this hypothesis.

* Directional <u>alternative hypothesis</u> (one-tailed): specifies the direction of a tested relationship

* Non-directional <u>alternative hypothesis</u> (two-tailed): only states that a difference exists in a tested relationship (does not specify the direction)





![Medical Statistics - Part 9: The Null Hypothesis](media/small_607436fc02d69.jpg)

Medical Statistics - Part 9: The Null Hypothesis




#### Interpretation [[6]](/library/DQX1yB)




* Correct result

* The <u>null hypothesis</u> is rejected when there is a relationship between two measured variables.

* The <u>null hypothesis</u> is accepted when there is no relationship between two measured variables.

* Type 1 error

* The <u>null hypothesis</u> is rejected when it is actually true and, consequently, the <u>alternative hypothesis</u> is accepted, although the observed effect is actually due to chance (<u>false positive</u> error).

* Significance level (<u>type 1 error</u> rate): the <u>probability</u> of a <u>type 1 error</u> (denoted with “α”)

* The <u>significance level</u> is determined by the <u>principal investigator</u>  before the study is conducted.

* For medical/epidemiological studies, the <u>significance level α</u> is usually set to 0.05 (the lower α, the greater the <u>statistical significance</u>)

* Multiple comparisons problem

* When multiple hypotheses are tested simultaneously with one data set (e.g., the data of a trial is tested for different outcomes), the <u>probability</u> of <u>type 1 errors</u> increases:

* P<sub>1</sub>= 1 - <u>P<sub>2</sub></u>

* P<sub>1</sub>= 1 - (1 - α)<sup>m</sup>

* P<sub>1</sub> = at least one significant result of m test

* <u>P<sub>2</sub></u> = no significant results of m tests; α = <u>type 1 error</u> rate

* Example: when testing 20 hypotheses on one set of data, each at a <u>significance level</u> of α = 0.05, the <u>probability</u> of obtaining at least one significant result by chance can be calculated as follows:

* P(at least one significant result in 20 tests at α = 0.05) = 1 - (1 - 0.05)<sup>20</sup>)

* P(at least one significant result in 20 tests at α = 0.05) ≈ 1 - 0.36 = 0.64)

* For 20 independent hypotheses that are simultaneously tested on the same data, each at α = 0.05, the <u>probability</u> of a <u>type 1 error</u> in at least 1 test is approximately 64%.

* There are methods to control the <u>type 1 error rate</u> for multiple comparisons; examples include:

* Bonferroni correction: the α value is divided by the number of comparisons performed

* False discovery rate: controls the <u>proportion</u> of <u>false positives</u> among the set of rejected hypotheses

* Results that are not adjusted for multiple comparisons should not be used to infer treatment effects or make clinical decisions to avoid interpreting random results as significant.

* Type 2 error

* The <u>null hypothesis</u> is accepted when it is actually false;  and, consequently, the <u>alternative hypothesis</u> is rejected even though an observed effect did not occur due to chance (<u>false negative</u> error).

* <u>Type 2 error</u> rate: the <u>probability</u> of a <u>type 2 error</u> (denoted by “β”)

* <u>Type 1 errors</u> are inversely related to <u>type 2 errors</u>; The increase of one causes a decrease of the other.

* Statistical power: (1-β)

* The <u>probability</u> of correctly rejecting the <u>null hypothesis</u>, i.e., the ability to detect a difference between two groups when there truly is a difference

* Complementary to the <u>type 2 error</u> rate

* Positively correlates with the sample size and the magnitude of the association of interest (e.g., increasing the sample size of a study would increase its <u>statistical power</u>)

* Positively correlates with measurement <u>accuracy</u>

* By convention, most studies aim to achieve 80% <u>statistical power</u>.




* P-value: the <u>probability</u> that the result of a given statistical test will be at least as extreme as the result actually observed, assuming that the <u>null hypothesis</u> is correct 

* Calculated using different statistical tests, depending on the type of data collected (e.g., <u>parametric tests</u>)

* Interpretation: The <u>p-value</u> is compared to the <u>significance level</u> (i.e., alpha or <u>α-level</u>), which is typically set at 0.05.

* p ≤ <u>α-level</u>: The association is considered <u>statistically significant</u> and H<sub>0</sub> is rejected.

* The <u>p-value</u> is not equivalent to the <u>probability</u> of H<sub>0</sub> being true, but rather to the <u>probability</u> of obtaining the same or more extreme results, assuming that H<sub>0</sub> is true.

* The <u>p-value</u> cannot be used to prove H<sub>1</sub> but rather to prove that observed data is inconsistent with H<sub>0</sub>.

* When multiple comparisons are performed (e.g., <u>ANOVA</u>), the <u>p-value</u> must be compared to an adjusted <u>α-level</u> to ensure adequate <u>statistical significance</u> (e.g., <u>α-level</u> adjusted according to the <u>Bonferroni correction</u>)




> [!NOTE]
> “The Accusation is <u>POS</u>ted But you <u>NEG</u>lect it!” (<u>type I error</u> (Alpha) is a false positive error and <u>type II error</u> (Beta) is false negative error)




> [!NOTE]
> “<u>Statistical significance</u>” does not mean “clinical significance.”




#### Overview of errors




| Overview |  |  |
| --- | --- | --- |
| Statistical test | <u>Null hypothesis</u> (H<sub>0</sub>) is true | <u>Null hypothesis</u> (H<sub>0</sub>) is false |
| Does not reject H<sub>0</sub> | <br>* 1-α<br><br> | <br>* <u>Type 2 error</u> (β)<br><br> |
| Rejects H<sub>0</sub> | <br>* <u>Type 1 error</u> (α)<br><br> | <br>* Power (1-β)<br><br> |





![Medical Statistics - Part 10: Type 1 and Type 2 Errors](media/small_60e31cdd6c156.jpg)

Medical Statistics - Part 10: Type 1 and Type 2 Errors

![Medical Statistics - Part 11: The p-value](media/small_611e0b2d9dec3.jpg)

Medical Statistics - Part 11: The p-value




### Probability




* <u>Probability</u> of an occurring event (P)

* Describes the degree of certainty that a particular event will take place (e.g., rolling a 6 is considered the event when tossing a die. When throwing a die, the <u>probability</u> of the event 6 occurring is 1/6)

* P = number of favorable outcomes/total number of possible outcomes

* <u>Probability</u> of an event not occurring (Q)

* The degree of certainty that a particular event will not take place (e.g., rolling a 6 is considered the event when tossing a die. When throwing a die, the <u>probability</u> of the event not occurring (rolling a “1”, “2”, “3”, “4”, or “5”) is 5/6)

* Q = number of unfavourable outcomes/total number of possible outcomes OR 1 - P





> [!NOTE]
> The actual <u>probability</u> of an event is not the same as the observed frequency of an event.




* Probability of independent events: The <u>probability</u> of event A is not contingent upon the <u>probability</u> of event B and vice versa. (e.g., <u>eye</u>-color and birthdays are two <u>independent variables</u>, with <u>probability</u> distributions independent of each other)

* Conditional probability: the <u>probability</u> of event A occurring given that event B has occurred
* P(A|B) = P(A and B) / P(B)

* P(B) = <u>probability</u> of event B

* P(A and B) = <u>probability</u> of events A and B occurring simultaneously

* Example: the <u>probability</u> of <u>lung cancer</u> in a smoker (A: occurrence of <u>lung cancer</u>; B: occurrence of smoking)

* The underlying condition is that the individual is a smoker: P(B) = <u>probability</u> of being a smoker = number of smokers/total population

* P(A and B) = <u>probability</u> of simultaneously being a smoker and having <u>lung cancer</u> = number of smokers with <u>lung cancer</u>/total population

* Therefore, P(A|B) = the <u>probability</u> of <u>lung cancer</u> arising in a smoker = P(A and B)/P(B) = number of smokers with <u>lung cancer</u>/number of smokers

* Multiplication rule

* P(A and B): the <u>probability</u> of events A and B occurring simultaneously

* The <u>multiplication rule</u> is obtained by rearranging the formula for <u>conditional probability</u>.

* For dependent conditions: P(A and B) = P(B) × P(A|B)

* For independent conditions: P(A and B) = P(B) x P(A)

* The <u>multiplication rule</u> can be applied to a decision tree (a visual representation of all possible outcomes) in order to calculate the <u>probability</u> of one of the branches (a particular outcome).

* Addition rule

* P(A or B): the <u>probability</u> of either event A or B occurring

* P(A or B) = P(A)+ P(B) − P(A and B): the <u>probability</u> of either event A or B occurring equals the sum of <u>probabilities</u> of events A and B minus the <u>probability</u> that they will occur simultaneously (nonmutually exclusive probability)

* Example: the <u>probability</u> that an individual has a history of either <u>myocardial infarction</u> (event A) or <u>stroke</u> (event B) equals the <u>probability</u> of a history of <u>myocardial infarction</u> P(A) plus the <u>probability</u> of a history of <u>stroke</u> P(B) minus the <u>probability</u> of a history of both <u>myocardial infarction</u> and <u>stroke</u> P(A and B)

* Example: meeting someone who has <u>coronary artery disease</u> (<u>CAD</u>) OR is <u>obese</u>  : 0.3 + 0.4 - (0.3 × 0.4) = 0.58

* If the events are mutually exclusive (mutually exclusive probability), P(A and B) = 0 and P(A or B) = P(A) + P(B)

* Example: Since any individual can have only one <u>blood group</u>, the <u>probability</u> of having both groups A and B is 0, and the <u>probability</u> of having either blood group A or B is P(A) + P(B).

* Example: Drawing an ace or a queen out of a deck with 52 cards: 4/52 + 4/52 = 8/52 = 2/13

* Bayes theorem

* <u>Bayes theorem</u> is used to calculate conditional <u>probabilities</u>.

* <u>Bayes theorem</u> describes the relationship between P(A|B)  and P(B|A) :
* P(A|B) = (P(B|A) × P(A)) / P(B)

---

## Confidence interval

* Overview

* <u>Confidence intervals</u> (CIs) are calculated using data from a sample and give an estimate of the true population value, which can never be determined by an experiment.

* CIs can be used to infer the <u>statistical significance</u> of sample values. CIs and <u>p-values</u> are interrelated and either can be used to determine whether a result is <u>statistically significant</u>.

* Definition: the range of values estimated to contain the true population value with a certain level of confidence
* Z scores for <u>confidence intervals</u> for normally distributed data (see <u>Z score</u>) 

* <u>Z-score</u> for a 95% <u>confidence interval</u> = 1.96

* <u>Z-score</u> for a 97.5% <u>confidence interval</u> = 2.24

* <u>Z-score</u> for a 99% <u>confidence interval</u> = 2.58

* Formula: The formula depends on the kind of data for which the <u>confidence interval</u> is calculated (e.g., means, <u>proportions</u>).

* For <u>confidence intervals</u> for the mean: mean +/- <u>Z score</u> x (<u>standard error of the mean</u>)

* For <u>confidence intervals</u> for the <u>proportion</u>: p +/- <u>Z score</u> x (√p x (1 - p)/n)

* Requires the following values:

* Confidence level (depends on the <u>alpha level</u>; if <u>α-level</u> = 5%, the confidence level is 95%) )

* Sample measurement

* <u>Standard error of the mean</u>, which requires the sample size (a larger sample size lowers the <u>standard error</u>, resulting in more narrow <u>confidence intervals</u>) and <u>standard deviation</u>

* Interpretation

* What kind of value does the <u>confidence interval</u> describe? Examples include:

* <u>Mean value</u> (e.g., the height of students in a class)

* Difference between the means of two values (e.g., the difference between the mean height of students in class A and the mean height of students in class B)

* <u>Relative risk</u> (e.g., the <u>relative risk</u> of <u>lung cancer</u> in smokers vs. nonsmokers)

* <u>Odds ratio</u> (e.g., <u>odds</u> of <u>melanoma</u> in residents of Hawaii compared to residents of Massachusetts)

* What is the confidence level?
* Every <u>alpha level</u> has a corresponding CI of (1 - α)%.

* An <u>alpha level</u> of 0.05 corresponds to a 95% <u>confidence interval</u>.

* An <u>alpha level</u> of 0.01 corresponds to a 99% <u>confidence interval</u>.

* Are several <u>confidence intervals</u> compared?

* Nonoverlapping CIs between two groups signify a <u>statistically significant</u> difference.

* Overlapping CIs may indicate that there is no <u>statistically significant</u> difference but can also occur with <u>statistically significant</u> differences.

* What is the <u>null value</u> of the effect tested? 1 for <u>ratios</u> (e.g., <u>relative risk</u>, <u>odds ratio</u>) and 0 for differences (e.g., <u>attributable risk</u>, <u>absolute risk reduction</u>)

* Does the CI include the <u>null value</u>?

* If the CI includes the <u>null value</u> (i.e., 0 for differences or 1 for <u>ratios</u>), the result is not <u>statistically significant</u>, and the <u>null hypothesis</u> cannot be rejected.

* If the CI does not include the <u>null value</u>, the result is <u>statistically significant</u>, and the <u>null hypothesis</u> can be rejected. Therefore, if the results of a study are <u>statistically significant</u>, i.e., <u>p-value</u> < <u>α-level</u>, the associated CI does not include the <u>null value</u>.

* How wide is the <u>confidence interval</u>?

* The wider the CI, the less significant the findings of a given statistical test.

* A larger sample size typically results in a narrower CI.

* A narrow, <u>statistically significant</u> CI typically indicates a small <u>p-value</u>.

---

## Statistical tests

### <u>Statistical significance</u> vs. clinical significance [[5]](/library/vQXABB)[[7]](/library/CQXqyB)




* Significance (epidemiology): the statistical <u>probability</u> that a result did not occur by chance alone 

* Statistical significance

* Describes a true statistical outcome (i.e., one that is determined by statistical tests) that has not occurred by chance

* If the <u>statistical significance</u> is high, the <u>probability</u> that the results are due to chance is low.

* Clinical significance (epidemiology)

* Describes an important change in a patient's clinical condition, which may or may not be due to an intervention introduced during a clinical study

* If the clinical significance is high, the intervention is likely to have had a great impact on patient outcome or measures.

* Statistical and clinical significance do not necessarily correlate. A study might have a high <u>statistical significance</u> but the tested intervention did not have any clinical impact on patient outcome.





### <u>Correlation</u> and regression




#### Correlation




* Definition

* A measure of the linear statistical <u>correlation</u> between <u>continuous variables</u>

* The <u>correlation coefficient</u> can lie anywhere between +1 and -1.

* Example: how does y change if x is changed?

* Interpretation: A <u>correlation coefficient</u> measures the strength (i.e., the degree) and direction (i.e., a positive or negative relationship) of a linear relationship (does not require causality).

* Direction of relationship: can be positive  or negative  (which are identified by a plus or minus, respectively)

* Strength of relationship

* Perfect relationship: two variables are perfectly linear and the <u>correlation coefficient</u> is +1 or -1

* No linear relationship: <u>correlation coefficient</u> is 0

* See “<u>Spearman correlation coefficient</u>“ and “<u>Pearson correlation coefficient</u>.“





#### Regression (epidemiology)




* Definition: the process of developing a mathematical relationship between the <u>dependent variable</u> (the outcome; y) and one or more <u>independent variables</u> (the exposure; x)

* Linear regression: a type of regression in which the <u>dependent variable</u> is continuous 

* Simple <u>linear regression</u> 

* 1 independent variable is analyzed

* If y has a linear relationship with an independent variable x, a graph plotting this relationship takes the form of a straight line (called regression line).

* In the case of simple <u>linear regression</u>, the equation of the regression line is: y = mx + b, with m representing the slope of the regression line, y the <u>dependent variable</u>, x the <u>independent variable</u>, and b the <u>y-intercept</u> (the value of y where the line crosses the y-axis)

* <u>Multiple linear regression</u>: > 1 independent variable is analyzed

* Logistic regression: a type of regression in which the <u>dependent variable</u> is categorical

* Simple <u>logistic regression</u>: 1 independent variable is analyzed

* <u>Multiple logistic regression</u>: > 1 independent variable is analyzed





![Linear regression (example)](media/l234akz7hwupn2oetw3nuvhy.jpg)

Linear regression (example)




### Parametric tests




<u>Parametric tests</u> are used to evaluate <u>statistically significant</u> differences between groups when the study sample has a <u>normal distribution</u> and the sample size is large.




* Pearson correlation coefficient (r)

* Compares interval level variables

* Calculates the estimated strength and direction of a relationship between two variables

* Interpretation  

* r is always a value between -1 and 1.

* A positive r-value = a positive <u>correlation</u>

* A negative r-value = negative <u>correlation</u>

* The closer the r-value is to 1, the stronger the <u>correlation</u> between the compared variables.

* The coefficient of determination = <u>r<sup>2</sup></u> (the coefficient may be affected by extreme values and indicates the <u>proportion</u> of a variable's <u>variance</u> that can be predicted by the <u>variance</u> of another variable)

* T-test

* Calculates the difference between the means of two samples  or between a sample and population or a value subject to change; especially when samples are small and/or the population or a value subject to change distribution is not known

* Used to determine the <u>confidence intervals</u> of a t-distribution (a collection of distributions in which the <u>standard deviation</u> is unknown and/or the sample size is small)

* One sample <u>t-test</u>

* Interpretation

* The t-value can be classified according a table that lists t-values and their corresponding quantiles based on the number of degrees of freedom (df) and the <u>significance level</u> (α value).

* |t| < tabular value of t<sub>df</sub> (1-α/2): <u>null hypothesis</u> cannot be rejected

* |t| > tabular value of t<sub>df</sub> (1-α/2): <u>null hypothesis</u> should be rejected

* Alternatively, one may calculate the <u>confidence intervals</u> of the sample observations and check if the population mean (μ<sub>0</sub>) falls within the range given by the <u>confidence intervals</u>.

* Formula: t-value = (sample mean - population mean)/<u>standard deviation</u>) * √(n)

* Prerequisite: <u>normal distribution</u> (the <u>variance</u> is known and depends on the degrees of freedom.)

* Calculates whether a sample mean differs from the population mean (μ<sub>0</sub>)

* Two sample <u>t-test</u>

* Calculates whether the means of two groups differ from one another

* Prerequisites

* Both sample groups are drawn from the same population and have the same (but unknown) <u>variance</u>.

* The difference between the observations in the two groups approximately follows a <u>normal distribution</u>.

* Formula: t-value = (mean difference between the two samples/<u>standard deviation</u>) * √(n)

* Interpretation: The t-value is compared with a table of t-values in order to determine whether the difference is <u>statistically significant</u> (similar to the one sample <u>t-test</u> described above).

* Unpaired t-test (independent samples <u>t-test</u>)

* Two different groups are sampled at the same time

* The difference between the means of a continuous <u>outcome variable</u> of these 2 groups is compared

* The <u>null hypothesis</u> is that the mean of these two groups is equal

* A <u>statistically significant</u> difference rejects the <u>null hypothesis</u>

* Paired t-test (dependent samples <u>t-test</u>)

* The same group is sampled at two different times

* The difference between the means of a continuous <u>outcome variable</u> of this group is compared

* The <u>null hypothesis</u> is that the group mean is equal at these two different times

* A <u>statistically significant</u> difference rejects the <u>null hypothesis</u>

* Analysis of variance (<u>ANOVA</u>)

* Calculates if there is a <u>statistically significant</u> difference between ≥ 2 groups by comparing their means

* The aim is to determine whether there is a <u>statistically significant</u> effect of one or more <u>independent variable</u>(s) on a <u>dependent variable</u> (the mean).

* Can be seen as an extension of the <u>t-test</u> (which can only be used for the analysis of two groups)

* One-way <u>ANOVA</u>: assesses if there is a <u>statistically significant</u> difference in the means of 1 independent variable (e.g., the mean height of women in clinics A, B, and C; the <u>independent variable</u> is the clinic, the <u>dependent variable</u> is the height)

* Two-way <u>ANOVA</u>: assesses if there is a <u>statistically significant</u> difference in the means of 2 independent variables (e.g., the mean height of women and men in clinics A, B, and C at a point in time; the <u>independent variables</u> are sex category and clinic, the <u>dependent variable</u> is the height)





![Correlation coefficient (example)](media/e4rf96q67vj5j1g9rni4s17k.jpg)

Correlation coefficient (example)




> [!NOTE]
> <u>T-test</u> has 2 syllables and differentiates between 2 groups; <u>ANOVA</u> has more than 2 syllables and can be used for 2 or more groups.




### Nonparametric tests




<u>Nonparametric tests</u> are used to evaluate the <u>statistically significant</u> difference between groups when the sample has nonnormal distribution and the sample size is small.




* Spearman correlation coefficient

* Calculates the relationship between two variables according to their rank

* Compares ordinal level variables

* Interpretation

* Extreme values have a minimal effect on Spearman coefficient.

* Not precise because not all information from the data set is used.

* See “<u>Correlation</u>.”

* Mann-Whitney U test

* Compares ordinal, interval, or <u>ratio</u> scales

* Calculates whether two independently chosen samples originate from the same population and have identical distributions and/or medians

* Example: comparing two groups of high school students – one with an average <u>GPA</u> of 4.2 and the other an average <u>GPA</u> of 3.2 – to determine if both came from the same larger group.

* Wilcoxon test (rank sum and signed rank)

* Rank sum test: compares the means between groups of different sizes

* Signed rank test: compares the means between pairs of scores that can be matched; substitute for the one-sample <u>t-test</u> when a pre-intervention measure is compared with a post-treatment measure and the <u>null hypothesis</u> is that the treatment has no effect

* Kruskal-Wallis H test

* Extension of the Mann-whitney U test

* Compares multiple groups by testing the <u>null hypothesis</u> (that there is no median difference between at least two groups)

* Binomial test

* Examines whether the observed frequency of an event with binary outcomes (e.g., heads/tails, dead/alive) is statistically probable or not

* Example: if a coin is tossed 20 times, it is likely to land on heads approx. 10 times. If only 9 heads come up, the result is still acceptable.

* If only 6 heads come up (p = 0.04), one is left wondering whether the coin is biased

* From a statistical perspective, the result of a coin toss should be questioned if fewer than 25% of the coin tosses result in heads because the <u>probability</u> of such an event is < 2.5%





### Categorical tests




<u>Categorical tests</u> are used to evaluate the <u>statistically significant</u> difference between groups with <u>categorical variables</u> (no mean values).




* Chi-square test (<u>X<sup>2</sup>test</u>)

* Used to compare the distributions of two <u>categorical variables</u>

* A <u>chi-square test</u> compares <u>proportions</u> in two or more sets of categorical data to determine whether there is a <u>statistically significant</u> difference in the distribution (e.g., the <u>proportion</u> of patients with <u>lung</u> disease in clinics A, B, and C at a certain point in time or the <u>proportion</u> of individuals with <u>diabetes</u> in four different ethnic groups)

* Fisher exact test

* Also calculates the difference between the frequencies in a sample but, unlike a <u>Chi-square test</u>, is used when the study sample is small

* Also aims to determine how likely it was the outcomes occurred due to chance





> [!NOTE]
> “Chi-tegorical:” Chi-square test is used for <u>categorical variables</u>.




![Selection of statistical tests depending on data type](media/v1zbikzhwinky89hpo9yw6ao.jpg)

Selection of statistical tests depending on data type

---