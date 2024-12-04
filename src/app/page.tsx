'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Trophy, Target, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function SkillAssessmentDashboard() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctQuestions, setCorrectQuestions] = useState(10);
  const [totalQuestions] = useState(15);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdateResults = () => {
    setIsUpdateModalOpen(false);
  };


  const questionAnalysisData = [
    { name: 'Correct', value: correctQuestions },
    { name: 'Incorrect', value: totalQuestions - correctQuestions }
  ];

  const COLORS = ['#10B981', '#EF4444']; 

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Skill Test Results
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-6">
                <Card className="relative overflow-hidden  shadow-xl border border-gray-200 rounded-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      
                      <div className="flex items-center space-x-6">
                       
                        <div className="">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"
                            width={50}
                            height={50}
                            alt="HTML5 Logo"
                            className="rounded-lg"
                          />
                        </div>

         
                        <div>
                          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
                            HTML Mastery
                          </h2>
                          <p className="text-md text-gray-600">
                            <span className="font-medium">8 Questions</span> • 15 minutes • June 5, 2021
                          </p>
                        </div>
                      </div>

                  
                      <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
                        <DialogTrigger asChild>
                          <Button
                            className="text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                            onClick={() => setIsUpdateModalOpen(true)}
                          >
                            Update
                          </Button>
                        </DialogTrigger>
              
                        <DialogContent className=" p-6 rounded-lg shadow-2xl ">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-800">
                              Update Test Results
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-6 py-4">
                       
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="rank" className="text-right font-medium text-gray-700">
                                Rank
                              </Label>
                              <Input
                                id="rank"
                                type="number"
                                value={rank}
                                onChange={(e) => setRank(Number(e.target.value))}
                                className="col-span-3 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                    
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="percentile" className="text-right font-medium text-gray-700">
                                Percentile
                              </Label>
                              <Input
                                id="percentile"
                                type="number"
                                value={percentile}
                                onChange={(e) => setPercentile(Number(e.target.value))}
                                className="col-span-3 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                     
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="correctQuestions" className="text-right font-medium text-gray-700">
                                Correct Questions
                              </Label>
                              <Input
                                id="correctQuestions"
                                type="number"
                                value={correctQuestions}
                                onChange={(e) => setCorrectQuestions(Number(e.target.value))}
                                className="col-span-3 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                    
                          <div className="flex justify-end">
                            <Button
                              type="submit"
                              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"
                              onClick={handleUpdateResults}
                            >
                              Save Changes
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Trophy className="h-8 w-8 text-yellow-500" />
                        <Badge variant="secondary" className="text-yellow-500 bg-yellow-100">Top 1%</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{rank}</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Your Rank
                      </CardTitle>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="h-8 w-8 text-blue-500" />
                        <Badge variant="secondary" className="text-blue-500 bg-blue-100">Above Average</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{percentile}%</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Percentile
                      </CardTitle>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                        <Badge variant="secondary" className="text-green-500 bg-green-100">Good Start</Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{correctQuestions} / {totalQuestions}</div>
                      <CardTitle className="text-lg font-semibold text-gray-600 mb-1">
                        Correct Answers
                      </CardTitle>
                    </CardContent>
                  </Card>
                </div>

           
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Performance Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Your score is in the {percentile}th percentile, which is below the average of 72% for all test takers.
                    </p>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Performance Graph</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <Card className="border-none shadow-xl rounded-lg overflow-hidden">
                  <CardHeader className="b text-white p-6">
                    <CardTitle className="text-2xl font-extrabold text-black">Syllabus Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-gray-50">
                    <div className="space-y-8">
                      {[
                        { name: "HTML Tools, Forms, History", value: 80, color: "from-blue-400 to-blue-600", textcolor: "text-blue-500" },
                        { name: "Tags & References in HTML", value: 60, color: "from-green-400 to-green-600", textcolor: "text-green-500" },
                        { name: "Tables & References in HTML", value: 24, color: "from-yellow-400 to-yellow-600", textcolor: "text-yellow-500" },
                        { name: "Tables & CSS Basics", value: 96, color: "from-purple-400 to-purple-600", textcolor: "text-purple-500" },
                      ].map((item) => (
                        <div key={item.name} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">{item.name}</span>
                            <span className={`text-sm font-bold ${item.textcolor}`}>{item.value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/30 backdrop-blur-md shadow-xl border border-gray-200 rounded-lg">
                  <CardHeader className="p-6">
                    <CardTitle className="text-3xl font-extrabold text-gray-800">
                      Question Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-between space-y-6">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 mb-4">
                          {correctQuestions}/{totalQuestions}
                        </div>
                        <p className="text-lg text-gray-600">
                          You’ve correctly answered <span className="font-medium text-gray-800">{correctQuestions}</span> out of
                          <span className="font-medium text-gray-800"> {totalQuestions}</span> questions. Keep pushing forward!
                        </p>
                      </div>
                      <div className="relative w-48 h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={questionAnalysisData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              startAngle={90}
                              endAngle={450}
                              paddingAngle={6}
                              dataKey="value"
                              strokeWidth={0}
                              className="transition-transform duration-300 hover:scale-105"
                            >
                              {questionAnalysisData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                  className="focus:outline-none"
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "none",
                                borderRadius: "8px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <Button className="mt-4 w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Review Answers
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}